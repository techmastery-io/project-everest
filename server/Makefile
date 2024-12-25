PROJECT_NAME := everest
PYTHON_VERSION := 3.12.6
VENV_NAME := everest-$(PYTHON_VERSION)

.ONESHELL:
.SHELLFLAGS = -e -c

help:
	@fgrep -h "##" $(MAKEFILE_LIST) | sed -e 's/\(\:.*\#\#\)/\:\ /' | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.clean-pyc: ## remove Python file artifacts
	find . -name '*.pyc' -exec rm -v -f {} +
	find . -name '*.pyo' -exec rm -v -f {} +
	find . -name '*~' -exec rm -v -f {} +
	find . -name '__pycache__' -exec rm -v -fr {} +

.clean-build: ## remove build artifacts
	rm -v -fr build/
	rm -v -fr dist/
	rm -v -fr .eggs/
	find . -name '*.egg-info' -exec rm -v -fr {} +
	find . -name '*.egg' -exec rm -v -f {} +

.clean-test: ## remove test and coverage artifacts
	rm -v -fr .tox/
	rm -v -f .coverage
	rm -v -fr htmlcov/
	rm -v -fr reports/
	rm -v -fr .pytest_cache/
	rm -v -f coverage.xml

clean: .clean-build .clean-pyc .clean-test ## remove all build, test, coverage and Python artifacts

# setup-dev: ## install dev requirements
# 	poetry install --with dev
# 	pre-commit install

# setup: ## install requirements
# 	poetry install --only main

create-venv: ## install python, create virtualenv and set virtualenv to current
	pip install -U pip uv
	uv sync 

build: ## up all containers and building the project image
	docker-compose up -d --build

up: ## up all containers
	docker-compose up -d

down: ## down all containers
	docker-compose down
	docker-compose rm

restart: ## restart app container
	docker restart $(PROJECT_NAME)

recreate: down up ## recreate containers

migrations: ## create migratrion file
	docker exec -it $(PROJECT_NAME) python manage.py makemigrations

migrate: ## run migratrion
	docker exec -it $(PROJECT_NAME) python manage.py migrate

shell: ## run django shell
	docker exec -it $(PROJECT_NAME) python manage.py shell

sh: ## run sh
	docker exec -it $(PROJECT_NAME) sh

logs: ## project logs on container
	docker logs $(PROJECT_NAME) --follow

lint: ## run code linters
	ruff check src

fmt format: ## run code formatters
	ruff format src
	ruff check --fix src

test:  ## running test
	pytest -vv

test-coverage: ## running test with coverage
	pytest -v --cov-config=pyproject.toml --cov=src --cov-report=term-missing --cov-report=xml --cov-fail-under=95
