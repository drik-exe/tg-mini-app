from sqlalchemy import select

from src.clients.database.models.user import User
from src.services.base import BaseService
from src.services.errors import UserNotFoundError
from src.services.user.interface import UserServiceI
from src.services.user.schemas import UserCreate, UserResponse


class UserService(BaseService, UserServiceI):
    async def create(self, user: UserCreate) -> None:
        async with self.session() as session, session.begin():
            new_user = User(
                user_id=user.user_id,
                first_name=user.first_name,
                last_name=user.last_name,
                username=user.username,
                language_code=user.language_code,
            )
            session.add(new_user)

    async def get_by_id(self, user_id: int) -> UserResponse:
        async with self.session() as session, session.begin():
            query = select(User).where(User.user_id == user_id)
            result = await session.execute(query)
            user = result.scalar_one_or_none()
            if not user:
                raise UserNotFoundError

        return UserResponse(
            user_id=user.user_id,
            first_name=user.first_name,
            last_name=user.last_name,
            username=user.username,
            language_code=user.language_code,
        )
