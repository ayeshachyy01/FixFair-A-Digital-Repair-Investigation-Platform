
from database import db


# phone brands table
class Brand(db.Model):
    __tablename__ = "brands"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)

    # connect brands with their phone models
    models = db.relationship("PhoneModel", backref="brand")


# phone models table
class PhoneModel(db.Model):
    __tablename__ = "phone_models"

    id = db.Column(db.Integer, primary_key=True)
    brand_id = db.Column(
        db.Integer,
        db.ForeignKey("brands.id"),
        nullable=False
    )
    model_name = db.Column(db.String(150), nullable=False)

    __table_args__ = (
        db.UniqueConstraint("brand_id", "model_name"),
    )


# problem categories table
class ProblemCategory(db.Model):
    __tablename__ = "problem_categories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)

    # connect categories with their problems
    problems = db.relationship("Problem", backref="category")


# common phone problems table
class Problem(db.Model):
    __tablename__ = "problems"

    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(
        db.Integer,
        db.ForeignKey("problem_categories.id"),
        nullable=False
    )
    problem_name = db.Column(db.String(200), unique=True, nullable=False)
