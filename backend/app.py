import pandas
import random

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/data.db'
db = SQLAlchemy(app)
CORS(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(500), nullable=False)


class TextAnswer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    text_id = db.Column(db.Integer)
    text_measure = db.Column(db.String(1024))


db.create_all()


@app.route('/api/levheim-survey-texts', methods=['GET'])
def get_texts():
    with open('48emotions1.txt') as f:
        texts = f.readlines()
        texts = [{'id': i+1, 'text': text } for i,text in enumerate(texts)]
        random.shuffle(texts)
        return jsonify(texts)


@app.route('/api/save-results', methods=['POST'])
def save_results():
    data = request.json
    user = User(email=data['email'])

    db.session.add(user)
    db.session.commit()

    return jsonify(user.id)


@app.route('/api/save-text-result', methods=['POST'])
def save_text_results():
    data = request.json
    text_answer = TextAnswer(**data)

    db.session.add(text_answer)
    db.session.commit()

    return jsonify(success=True)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

