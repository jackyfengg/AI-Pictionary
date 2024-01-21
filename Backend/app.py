from flask import Flask, request, jsonify
from openai import OpenAI
from IPython.display import Image
import flask
import json
import ai
from flask_cors import CORS

app = Flask('backend')
CORS(app)

@app.route('/data', methods=['POST'])
def imageretrival():
        print("imageretrival endpoint reached")
        prompt = request.get_json()
        response = ai.imagenerator(prompt)
        return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
