import os
from openai import OpenAI
from IPython.display import Image, display
import json

OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY', "API NOT FOUND")

client = OpenAI()
  
def imagenerator (message): 
  response = client.images.generate(
    model="dall-e-2",   
    prompt=message,
    n=1,
    size="256x256"
  )

  #img_data = {"url" : response.data[0].url}
  return response.data[0].url
  
  
