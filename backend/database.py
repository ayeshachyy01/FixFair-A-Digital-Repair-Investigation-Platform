
import os
from pathlib import Path

from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.engine import URL

# get the path of the backend folder
BASE_DIR = Path(__file__).resolve().parent

# load the database credentials from .env
load_dotenv(BASE_DIR / ".env")

# create the SQLAlchemy database object
db = SQLAlchemy()


def get_database_uri():
    # get the MySQL connection details
    return URL.create(
        drivername="mysql+pymysql",
        username=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        host=os.getenv("DB_HOST"),
        port=int(os.getenv("DB_PORT", 3306)),
        database=os.getenv("DB_NAME")
    )
