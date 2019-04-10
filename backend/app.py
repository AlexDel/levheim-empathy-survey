from flask import Flask, jsonify
from flask_cors import CORS
import pandas
import random

app = Flask(__name__)
CORS(app)

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


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

