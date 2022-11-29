import time
import requests
from bs4 import BeautifulSoup
import re

URL = f"https://trends24.in/united-states/"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
trending = soup.find_all("li")

data = []
for li in soup.find_all("li"):
    data.append(li.text)

data = data[0:10]

pattern = r'[0-9].*K'
trends = []
for twitter_trends in data:
   clean_data = re.sub(pattern, '',twitter_trends)
   clean_data = clean_data +"</br>"
   trends.append(clean_data)

list_trending = " ".join(trends)
string = "list = [\'" + list_trending + "\'];"

remaining_content = """

const twitter = async()=>{
var i = 1;
        const n1 = document.getElementById('twitter')
        const heading1 = `</br><p style="text-align:center; font-size: 25px; color: #00acee;bottom:-15%;  font-weight:bold;">TWITTER TRENDING</br></br>${list}</br></p>`
        n1.innerHTML = heading1
}
twitter();

"""


contentreplace = string
filename = "/home/argulus/Desktop/dashboards/scripts/twitter.js"
with open(filename, 'r+') as f:
     content = f.read()
     f.seek(0)
     f.write(f"{contentreplace}\n\n{remaining_content}")
