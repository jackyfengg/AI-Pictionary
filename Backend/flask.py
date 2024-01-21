from flask import Flask
from openai import OpenAI
from IPython.display import Image, display
import flask
import json
import ai
import imageprompt
from flask_cors import CORS

app = Flask('backend')
CORS(app)

@app.route('/data', methods=["GET"])

def getprompt():
      prompt = imageprompt.prompt

def imageretrival():
        return ai.imagenerator(prompt)

if __name__ == "__main__":
    app.run("localhost", 6969)
