from pydantic import BaseModel, create_model


def build_dynamic_model(schema: dict) -> type[BaseModel]:
    """
    Dynamically create a Pydantic model from a JSON Schema.
    """
    # Map JSON Schema types to Python types
    type_mapping = {
        "string": str,
        "number": float,
        "integer": int,
        "boolean": bool,
        "array": list,
        "object": dict,
    }

    # Extract properties and required fields
    properties = schema["properties"]
    required = set(schema.get("required", []))

    # Prepare fields for create_model
    fields = {
        field_name: (type_mapping[field_data["type"]], ... if field_name in required else None)
        for field_name, field_data in properties.items()
    }

    # Dynamically create the Pydantic model
    return create_model(schema["title"], **fields)
