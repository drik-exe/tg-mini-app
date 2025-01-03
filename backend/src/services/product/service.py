from collections.abc import Callable

from pydantic import TypeAdapter
from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from src.clients.database.models.ingredient import Ingredient
from src.clients.database.models.product import Product, ProductIngredient
from src.services.base import BaseService
from src.services.errors import IngredientNotFoundError, ProductNotFoundError
from src.services.product.interface import ProductIngredientServiceI, ProductServiceI
from src.services.product.schemas import ProductCreate, ProductResponse, ProductUpdate
from src.services.schemas import Image
from src.services.utils import delete_image, save_image


class ProductService(BaseService, ProductServiceI):
    def __init__(
        self, session: Callable[..., AsyncSession], product_ingredient_service: ProductIngredientServiceI
    ) -> None:
        super().__init__(session)
        self.product_ingredient_service = product_ingredient_service

    async def create(self, product_data: ProductCreate, image: Image) -> None:
        async with self.session() as session:
            async with session.begin():
                query = select(Ingredient).where(Ingredient.ingredient_id.in_(product_data.ingredient_ids))
                result = await session.execute(query)
                ingredients = result.scalars().all()

                if len(ingredients) != len(product_data.ingredient_ids):
                    missing_ids = set(product_data.ingredient_ids) - {
                        ingredient.ingredient_id for ingredient in ingredients
                    }
                    raise IngredientNotFoundError(f"Ingredients with ids: {missing_ids} not found")

                image_url = await save_image(image, "media/products") if image.filename else None

                new_product = Product(
                    name=product_data.name,
                    description=product_data.description,
                    image_url=image_url,
                )
                session.add(new_product)

            for ingredient_id in product_data.ingredient_ids:
                await self.product_ingredient_service.create(
                    product_id=new_product.product_id,
                    ingredient_id=ingredient_id,
                )

    async def get_all(self) -> list[ProductResponse]:
        async with self.session() as session:
            query = select(Product).options(selectinload(Product.ingredients))
            result = await session.execute(query)
            products = result.scalars().all()
            type_adapter = TypeAdapter(list[ProductResponse])
            return type_adapter.validate_python(products)

    async def get_by_name(self, product_name: str) -> ProductResponse:
        async with self.session() as session:
            query = select(Product).options(selectinload(Product.ingredients)).where(Product.name == product_name)
            result = await session.execute(query)
            product = result.scalar()
            if not product:
                raise ProductNotFoundError
            type_adapter = TypeAdapter(ProductResponse)
            return type_adapter.validate_python(product)

    async def update(self, product_id: int, product_data: ProductUpdate, image: Image) -> None:
        image_url = await save_image(image, "media/products") if image.filename else None
        async with self.session() as session, session.begin():
            product = await session.get(Product, product_id)
            if product:
                if product_data.name:
                    product.name = product_data.name
                if product_data.description:
                    product.description = product_data.description
                if product_data.ingredient_ids:
                    await self.product_ingredient_service.update(
                        product_id=product_id,
                        product_data=product_data,
                    )
                if image_url:
                    if filename := product.image_url:
                        await delete_image(str(filename), "media/products")
                    product.image_url = image_url
            else:
                raise ProductNotFoundError


class ProductIngredientService(BaseService, ProductIngredientServiceI):
    async def create(self, product_id: int, ingredient_id: int) -> None:
        async with self.session() as session, session.begin():
            new_product_ingredient = ProductIngredient(product_id=product_id, ingredient_id=ingredient_id)
            session.add(new_product_ingredient)

    async def update(self, product_id: int, product_data: ProductUpdate) -> None:
        async with self.session() as session:
            query = delete(ProductIngredient).where(ProductIngredient.product_id == product_id)
            result = await session.execute(query)

            if result.rowcount == 0:
                raise ProductNotFoundError("No products found with the given product_id")

            for ingredient_id in product_data.ingredient_ids:
                new_product_ingredient = ProductIngredient(product_id=product_id, ingredient_id=ingredient_id)
                session.add(new_product_ingredient)
