#TODO: find common date numbers, make list and store them in dict. then push event names/dates into html
import time
import requests
from bs4 import BeautifulSoup
import re

month = "November"

URL = f"https://nationaldaycalendar.com/{month}/"
page = requests.get(URL)


soup = BeautifulSoup(page.content, "html.parser")
results = soup.find(id="ff-main-container")

events = results.find_all("em")
event_days = results.find_all("a",href=True)

print(len(event_days))
dirty_lst = event_days[130:len(event_days)]

clean_list = []
i = 0
for i,wrd in enumerate(dirty_lst):
   new_word = re.sub('.*title="',"",str(wrd))
   new_word = re.sub('">.*','',new_word) 
   clean_list.append(new_word)
   i+= 1

substring = "<a href"
fresh_list = [item for item in clean_list if substring not in item] 
#new_list = fresh_list
#fresh_list = [item for item in new_list if f" {month}"  in item]

print(fresh_list)

for strings in fresh_list:
      print(f"{strings}</br>")
      time.sleep(.3)


event_dates = fresh_list[0].split("November")
event_date = event_dates[1].strip()

event_name = event_dates[0]
event_name = event_name[:-3].strip()

print(f"{event_date} {event_name}")

time.sleep(500)
