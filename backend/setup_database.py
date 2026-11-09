
from flask import Flask

from database import db, get_database_uri
from models import Brand, PhoneModel, ProblemCategory, Problem


# create the Flask application
app = Flask(__name__)

# configure the MySQL database
app.config["SQLALCHEMY_DATABASE_URI"] = get_database_uri()
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# connect SQLAlchemy with Flask
db.init_app(app)


def setup_database():

    with app.app_context():

        # create all database tables
        db.create_all()

        # add phone brands
        brand_names = [
            "Samsung",
            "Apple",
            "Xiaomi",
            "Redmi",
            "Oppo",
            "Vivo",
            "Realme",
            "Google"
        ]

        for name in brand_names:
            brand = Brand.query.filter_by(name=name).first()

            if brand is None:
                db.session.add(Brand(name=name))

        db.session.commit()

        # get brand IDs
        brands = {
            brand.name: brand.id
            for brand in Brand.query.all()
        }

        # add phone models
        phone_models = [
            ("Samsung", "Galaxy A13"),
            ("Samsung", "Galaxy A73 5G"),
            ("Samsung", "Galaxy S24"),
            ("Apple", "iPhone 13"),
            ("Apple", "iPhone 14"),
            ("Apple", "iPhone 15"),
            ("Xiaomi", "Redmi Note 12"),
            ("Xiaomi", "Xiaomi 13"),
            ("Redmi", "Redmi Note 13"),
            ("Oppo", "Reno 11"),
            ("Vivo", "V29"),
            ("Realme", "Realme 11"),
            ("Google", "Pixel 7"),
            ("Google", "Pixel 8")
        ]

        for brand_name, model_name in phone_models:
            model = PhoneModel.query.filter_by(
                brand_id=brands[brand_name],
                model_name=model_name
            ).first()

            if model is None:
                db.session.add(
                    PhoneModel(
                        brand_id=brands[brand_name],
                        model_name=model_name
                    )
                )

        # add problem categories
        category_names = ["Hardware", "Software"]

        for name in category_names:
            category = ProblemCategory.query.filter_by(name=name).first()

            if category is None:
                db.session.add(ProblemCategory(name=name))

        db.session.commit()

        # get category IDs
        categories = {
            category.name: category.id
            for category in ProblemCategory.query.all()
        }

        # add common phone problems
        problems = [
            ("Hardware", "Battery drains quickly"),
            ("Hardware", "Phone will not charge"),
            ("Hardware", "Screen is cracked or damaged"),
            ("Hardware", "Touchscreen is not responding"),
            ("Hardware", "Phone overheats"),
            ("Hardware", "Camera is not working"),
            ("Hardware", "Speaker or microphone problem"),
            ("Hardware", "Power button is not working"),
            ("Hardware", "Green line or display discoloration"),
            ("Software", "Phone is running slowly"),
            ("Software", "Apps keep crashing"),
            ("Software", "Phone keeps restarting"),
            ("Software", "Wi-Fi or Bluetooth problem"),
            ("Software", "Mobile data is not working"),
            ("Software", "System update problem"),
            ("Software", "Storage appears full"),
            ("Software", "Phone is stuck on startup"),
            ("Software", "Unexpected error messages")
        ]

        for category_name, problem_name in problems:
            problem = Problem.query.filter_by(
                problem_name=problem_name
            ).first()

            if problem is None:
                db.session.add(
                    Problem(
                        category_id=categories[category_name],
                        problem_name=problem_name
                    )
                )

        db.session.commit()

        print("FixFair MySQL database setup complete!")
        print("Tables and starter data created successfully.")


if __name__ == "__main__":
    setup_database()
