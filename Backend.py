from flask import Flask
from openai import OpenAI
from IPython.display import Image, display
import flask
import json

app = Flask('backend')
client = OpenAI()

response = client.images.generate(
    model="dall-e-3", 
    prompt="[insert prompt]",
    size="1024x1024", 
    quality="standard", 
    n=1,
)

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
    {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
  ]
)

@app.route("/")
def hello():
    return Image(url=response.data[0].url)

@app.route('/data', methods=["GET"])
def users():
    with open("data.json", "r") as databit:
        data = json.load(databit)
        
    return flask.jsonify(data)

if __name__ == "__main__":
    app.run("localhost", 6969)
