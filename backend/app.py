from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/mehrabian-survey-question', methods=['GET'])
def get_question():
    with open('./backend/mehrabian-questions.txt', encoding='utf-8') as file:
        questions = file.readlines()
        return jsonify(questions)

if __name__ == "__main__":
    app.run()

