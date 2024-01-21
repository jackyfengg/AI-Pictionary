from flask import Flask
from openai import OpenAI
from IPython.display import Image, display
import flask
import json
from flask_cors import CORS

OpenAI.api_key = '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'
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