# Pydantic settings for the server configuration


from pydantic import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL = "sqlite:///./test.db"