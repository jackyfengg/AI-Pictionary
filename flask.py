from flask import Flask
from openai import OpenAI
from IPython.display import Image, display
import flask
import json
from flask_cors import CORS

app = Flask('backend')


# @app.route("/")
# def hello():
#     return Image(url=response.data[0].url)

@app.route('/data', methods=["GET"])
def users():
    with open("data.json", "r") as databit:
        data = json.load(databit)
        data.append({

        })

        CORS(app)
        CORS(app)
        
    return flask.jsonify(data)

if __name__ == "__main__":
    app.run("localhost", 6969)
