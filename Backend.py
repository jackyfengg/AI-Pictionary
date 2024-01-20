from flask import Flask
import flask
import json

app = Flask('backend')

@app.route('/data', methods=["GET"])
def users():
    with open("data.json", "r") as databit:
        data = json.load(databit)
        
    return flask.jsonify(data)

if __name__ == "__main__":
    app.run("localhost", 6969)
