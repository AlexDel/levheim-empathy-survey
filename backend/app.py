from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/mehrabian-survey-question', methods=['GET'])
def get_question():
    with open('./mehrabian-questions.txt', encoding='utf-8') as file:
        questions = file.readlines()
        return jsonify(questions)

@app.route('/api/mehrabian-survey-question', methods=['GET'])
def get_texts():
    pass


@app.route('/api/mehrabian-survey-question', methods=['POSTS'])
def save_results():
    pass


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

