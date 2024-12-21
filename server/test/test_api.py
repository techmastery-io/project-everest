from fastapi.testclient import TestClient
import pytest
from server.src.main import app

@pytest.fixture
def client():
    return TestClient(app)


def test_hello_world(client):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}