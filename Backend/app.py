from flask import Flask, request, jsonify
from openai import OpenAI
from IPython.display import Image
import flask
import json
import ai
from flask_cors import CORS

app = Flask('backend')
CORS(app)


@app.route('/retrieve', methods=['POST'])
def getLink():
      file = open("image_url.txt", "w+")
      result = file.readline()
      file.close()
      return result


@app.route('/data', methods=['POST'])
def imageretrival():
        print("imageretrival endpoint reached")
        prompt = request.form.get('data')
        response = ai.imagenerator(prompt)

        file = open("image_url.txt", "w+")
        file.write("reet \n")
        file.close()

        return "reet"

if __name__ == "__main__":
    app.run(debug=True)
