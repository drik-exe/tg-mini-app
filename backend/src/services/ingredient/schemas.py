from typing import Any

from pydantic import BaseModel, Field, model_validator
import json


class IngredientCreate(BaseModel):
    name: str

    @model_validator(mode="before")
    @classmethod
    def to_py_dict(cls, data: str) -> dict:
        return json.loads(data)


class IngredientResponse(BaseModel):
    ingredient_id: int
    name: str
    image_url: str | None

    class Config:
        from_attributes = True


class IngredientUpdate(BaseModel):
    name: str = Field(None)

    @model_validator(mode="before")
    @classmethod
    def to_py_dict(cls, data: str) -> dict[str, Any]:
        return json.loads(data)