import json
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['DEBUG'] = True

CORS(app)


@app.route('/api/v1/store-details', methods=['POST'])
def store_details():
    addition = 12
    if request.method == 'POST':
        content = request.get_json(force=True)
        content = request.json
        first_number = content['first_number']
        last_number = content['last_number']
        addition = float(first_number) + float(last_number)

    return jsonify({'addition': addition})
