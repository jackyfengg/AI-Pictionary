# from flask import Flask
import os
from openai import OpenAI
from IPython.display import Image, display
import json

# response = client.images.generate(
#     model="dall-e-3", 
#     prompt="[insert prompt]",
#     size="1024x1024", 
#     quality="standard", 
#     n=1,
# )

OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY', "API NOT FOUND")

client = OpenAI()

def imagenerator (message): 
  response = client.images.generate(
    model="dall-e-2",   
    prompt=message,
    n=1,
    size="256x256"
  )

  return json.dumps(response)
  
  
