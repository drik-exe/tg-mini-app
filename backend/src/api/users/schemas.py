from pydantic import BaseModel


class UserCreate(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    username: str
    language_code: str


class UserResponse(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    username: str
    language_code: str

    class Config:
        from_attributes = True
