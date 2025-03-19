from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder='../templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    text = request.form['text']
    return jsonify({'message': text})

if __name__ == "__main__":
    app.run(debug=True)