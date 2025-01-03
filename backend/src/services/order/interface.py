from abc import abstractmethod
from typing import Protocol

from src.services.order.schemas import OrderCreate, OrderResponse


class OrderServiceI(Protocol):
    @abstractmethod
    async def create_order(self, order_data: OrderCreate) -> None:
        ...

    @abstractmethod
    async def get_order(self, order_id: int) -> OrderResponse:
        ...
