from flask import Flask, request
import urllib
from lxml import etree
import json

app = Flask(__name__)

@app.route('/news', methods=['POST'])
def news():
    story_name = request.form['name']

    # Get xml
    xml_str = urllib.urlopen('http://www.nytimes.com/services/xml/rss/nyt/GlobalHome.xml').read()
    xml = etree.fromstring(xml_str)

    result = []
    # Go through top stories and print description if story_name in title
    for title, description in titles(xml):
        if story_name.lower() in title.lower():
            result.append(description)

    return json.dumps({'result' : result})

def titles(xml):
    items = xml.findall('channel/item')
    for item in items:
        title = item.getchildren()[0].text
        description = item.getchildren()[7].text
        yield title, description

@app.route('/')
def hello_world():
        return 'Hello World!'

if __name__ == '__main__':
    app.run()
