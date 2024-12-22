from pydantic import BaseModel
import pytest

from src.utils import build_dynamic_model


class BlogpostContentType(BaseModel):
    title: str
    description: str
    body: str


test_schema = {  # Based on the BlogpostContentType model
    "properties": {
        "title": {"title": "Title", "type": "string"},
        "description": {"title": "Description", "type": "string"},
        "body": {"title": "Body", "type": "string"},
    },
    "required": ["title", "description", "body"],
    "title": "BlogpostContentType",
    "type": "object",
}


def test_build_dynamic_model():
    """GIVEN a ContentType schema"""
    schema = test_schema

    DynamicModel = build_dynamic_model(schema)

    """WHEN user is trying to create a content based on the schema"""
    user_content = {
        "title": "Hello, World!",
        "description": "This is a test post",
        "body": "This is a test post",
    }

    """Validate the content. No exception should be raised"""
    DynamicModel(**user_content)


def test_build_dynamic_model_validation():
    """GIVEN a ContentType schema"""
    schema = test_schema

    DynamicModel = build_dynamic_model(schema)

    """WHEN the content is missing a required field"""
    user_content = {
        # "title": "Hello, World!",
        "description": "This is a test post",
        "body": "This is a test post",
    }

    """THEN an exception should be raised"""
    with pytest.raises(ValueError):
        DynamicModel(**user_content)

    """WHEN the type of a field is incorrect"""
    user_content = {
        "title": "Hello, World!",
        "description": "This is a test post",
        "body": 123,
    }

    """THEN an exception should be raised"""
    with pytest.raises(ValueError):
        DynamicModel(**user_content)
