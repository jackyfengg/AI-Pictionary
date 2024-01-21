# from flask import Flask
import os
from openai import OpenAI
from IPython.display import Image, display
# import flask
# import json
# from flask_cors import CORS

# response = client.images.generate(
#     model="dall-e-3", 
#     prompt="[insert prompt]",
#     size="1024x1024", 
#     quality="standard", 
#     n=1,
# )

OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY', "API NOT FOUND")
print(OPENAI_API_KEY)

client = OpenAI()

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
    {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
  ]
)

print(completion.choices[0].message)