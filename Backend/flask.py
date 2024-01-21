from flask import Flask, request
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
        prompt = request.json['data']
        return ai.imagenerator(prompt)

if __name__ == "__main__":
    app.run(debug=True)
