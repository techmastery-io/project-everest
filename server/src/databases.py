# models.py
from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class ContentType(Base):
    __tablename__ = "content_types"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    # TODO: schema is a JSON object
