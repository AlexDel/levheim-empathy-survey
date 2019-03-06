from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/mehrabian-survey-question', methods=['GET'])
def get_question():
    with open('./mehrabian-questions.txt', encoding='utf-8') as file:
        questions = file.readlines()
        return jsonify(questions)

if __name__ == "__main__":
    app.run()

