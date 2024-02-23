from flask import Flask, request
import ai
from flask_cors import CORS

app = Flask('backend')
CORS(app)

@app.route('/data', methods=['POST'])
def imageretrival():
        print("imageretrival endpoint reached")
        prompt = request.form.get('data')
        response = ai.imagenerator(prompt)
        return response

if __name__ == "__main__":
    app.run(debug=True)
