"""added ingredient

Revision ID: bf0f6de0ff75
Revises: 30053a7bbc44
Create Date: 2024-10-15 20:13:42.867663

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'bf0f6de0ff75'
down_revision: Union[str, None] = '30053a7bbc44'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('ingredients',
    sa.Column('ingredient_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('image_url', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('ingredient_id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('product_ingredient',
    sa.Column('product_id', sa.Integer(), nullable=False),
    sa.Column('ingredient_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['ingredient_id'], ['ingredients.ingredient_id'], ),
    sa.ForeignKeyConstraint(['product_id'], ['products.product_id'], ),
    sa.PrimaryKeyConstraint('product_id', 'ingredient_id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('product_ingredient')
    op.drop_table('ingredients')
    # ### end Alembic commands ###
