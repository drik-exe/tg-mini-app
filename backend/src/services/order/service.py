from datetime import UTC, datetime

from pydantic import TypeAdapter
from sqlalchemy import select

from src.clients.database.models.order import Order
from src.services.base import BaseService
from src.services.errors import OrderNotFoundError
from src.services.order.interface import OrderServiceI
from src.services.order.schemas import OrderCreate, OrderResponse


class OrderService(BaseService, OrderServiceI):
    async def create_order(self, order_data: OrderCreate) -> None:
        async with self.session() as session, session.begin():
            new_order = Order(
                basket_id=order_data.basket_id,
                total_price=order_data.total_price,
                order_date=datetime.now(tz=UTC),
            )
            session.add(new_order)
            # await session.flush()

    async def get_order(self, order_id: int) -> OrderResponse:
        async with self.session() as session:
            query = select(Order).where(Order.order_id == order_id)
            result = await session.execute(query)
            order = result.scalar_one_or_none()

            if not order:
                raise OrderNotFoundError
            type_adapter = TypeAdapter(OrderResponse)
            return type_adapter.validate_python(order)
