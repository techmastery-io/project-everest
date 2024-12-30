FROM python:3.12-slim

ARG APP_USER=everest

ARG APP_HOME=/app

RUN adduser --disabled-password --gecos '' ${APP_USER}
RUN adduser ${APP_USER} sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

RUN apt update \
  && apt install -y gcc curl

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

RUN pip install --upgrade pip

# Set the working directory
WORKDIR ${APP_HOME}

COPY pyproject.toml uv.lock ${APP_HOME}
# Create a virtual environment and install dependencies using uv

RUN python -m venv .venv && \
    . .venv/bin/activate && \
    uv sync --frozen --no-cache

# Copy the application code into the container
COPY . ${APP_HOME}

# Run the application
CMD ["/app/.venv/bin/uvicorn", "src.main:app", "--port", "8000", "--host", "0.0.0.0", "--reload"]
