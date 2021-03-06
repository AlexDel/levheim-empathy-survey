import pandas
import random
import string

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/data.db'
db = SQLAlchemy(app)
CORS(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sex = db.Column(db.String(80), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    mehrabian_score = db.Column(db.Integer, nullable=False)


class TextAnswer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    text_id = db.Column(db.Integer)
    text_measure = db.Column(db.String(1024))

class StringCode(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    code = db.Column(db.String(80), nullable=False)


db.create_all()


@app.route('/api/mehrabian-survey-question', methods=['GET'])
def get_question():
    with open('./mehrabian-questions.txt', encoding='utf-8') as file:
        questions = file.readlines()
        return jsonify(questions)


@app.route('/api/levheim-survey-texts', methods=['GET'])
def get_texts():
    df = pandas.read_csv('all_emotions.csv')
    df['id'] = range(df['text'].count())
    res = df.to_dict('records')
    random.shuffle(res)
    return jsonify(res)


@app.route('/api/save-results', methods=['POST'])
def save_results():
    data = request.json
    user = User(sex=data['sex'], age=int(data['age']), mehrabian_score=int(data['empathyLevel']))

    db.session.add(user)
    db.session.commit()

    return jsonify(user.id)

@app.route('/api/save-text-result', methods=['POST'])
def save_text_results():
    data = request.json
    text_answer = TextAnswer(**data)

    letters = string.ascii_uppercase
    random_string = ''.join(random.choice(letters) for i in range(5))

    db.session.add(text_answer)
    db.session.commit()

    return jsonify(success=True)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

