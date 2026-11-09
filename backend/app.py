
from flask import Flask, jsonify, request

from database import db, get_database_uri
from models import Brand, PhoneModel, ProblemCategory, Problem


# create the Flask application
app = Flask(__name__)

# configure the MySQL database
app.config["SQLALCHEMY_DATABASE_URI"] = get_database_uri()
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# connect SQLAlchemy with Flask
db.init_app(app)


# homepage (keep the old frontend available for now)
@app.route("/")
def home():
    return app.send_static_file("index.html")


# get all phone brands
@app.route("/api/brands")
def get_brands():

    brands = Brand.query.order_by(Brand.name).all()

    return jsonify([
        {
            "id": brand.id,
            "name": brand.name
        }
        for brand in brands
    ])


# get models belonging to a selected brand
@app.route("/api/models/<int:brand_id>")
def get_models(brand_id):

    models = PhoneModel.query.filter_by(
        brand_id=brand_id
    ).order_by(PhoneModel.model_name).all()

    return jsonify([
        {
            "id": model.id,
            "model_name": model.model_name
        }
        for model in models
    ])


# get phone problems
@app.route("/api/problems")
def get_problems():

    category = request.args.get("category", "Both")

    problems = Problem.query.join(
        ProblemCategory
    ).with_entities(
        Problem.id,
        Problem.problem_name,
        ProblemCategory.name.label("category")
    )

    if category != "Both":
        problems = problems.filter(
            ProblemCategory.name == category
        )

    problems = problems.order_by(
        ProblemCategory.name,
        Problem.problem_name
    ).all()

    return jsonify([
        {
            "id": problem.id,
            "problem_name": problem.problem_name,
            "category": problem.category
        }
        for problem in problems
    ])


if __name__ == "__main__":
    app.run(debug=True)
