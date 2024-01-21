from flask import Flask
from openai import OpenAI
from IPython.display import Image, display
import flask
import json
import ai
from flask_cors import CORS

app = Flask('backend')
CORS(app)

# prompt sent in from users
prompt = "[insert prompt]"

# @app.route("/")
# def hello():
#     return Image(url=response.data[0].url)

@app.route('/data', methods=["GET"])
def users():
    return ai.image_generator(prompt)

if __name__ == "__main__":
    app.run("localhost", 6969)
