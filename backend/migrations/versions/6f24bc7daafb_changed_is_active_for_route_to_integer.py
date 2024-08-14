"""changed is_active for route to integer

Revision ID: 6f24bc7daafb
Revises: 08158a16ea4d
Create Date: 2024-08-05 14:05:24.431586

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision: str = '6f24bc7daafb'
down_revision: Union[str, None] = '08158a16ea4d'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('news', 'is_active',
               existing_type=mysql.INTEGER(),
               type_=sa.Boolean(),
               existing_nullable=True)
    op.alter_column('route', 'is_active',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Integer(),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('route', 'is_active',
               existing_type=sa.Integer(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=True)
    op.alter_column('news', 'is_active',
               existing_type=sa.Boolean(),
               type_=mysql.INTEGER(),
               existing_nullable=True)
    # ### end Alembic commands ###
