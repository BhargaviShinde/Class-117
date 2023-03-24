from flask import Flask, render_template, url_for, request, jsonify
from text_sentiment_prediction import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict-emotions', methods=["POST"])
def predict_emotion():
    
    # Get Input Text from POST Request
    inputData = request.json.get('text')
    print(inputData)
    if not inputData:
        # Response to send if the input_text is undefined
        response = {
            'status': 'error',
            'message': 'Enter data'
        }

        return jsonify(response)
    else:
        pemo,pemopath = predict(inputData)
        response = {
            'status': 'success',
            'data': {
                'pemo':pemo,
                'pemopath':pemopath
            }
        }
        # Response to send if the input_text is not undefined
        
        # Send Response         
        
       
app.run(debug=True)



    