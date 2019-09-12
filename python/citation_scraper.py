from bs4 import BeautifulSoup
import requests
import urllib
import time
from selenium import webdriver

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument("--headless")

# !pip install phantomjs-binary

title = 'Database Resources of the National Center for Biotechnology Information'
title_dict = {'q': title}

query = urllib.urlencode(title_dict)
# query

queryFront = 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C22&'
queryEnd = '&btnG='
fullQuery = queryFront + query + queryEnd
# fullQuery

driver = webdriver.Chrome()
driver.get(fullQuery)
time.sleep(5)
htmlSource = driver.page_source

content = BeautifulSoup(htmlSource, 'html.parser')

import re
citationTag = None
aTags = content.find_all("a")
for tag in aTags:
    if "scholar?cites" in str(tag):
        citationTag = tag

citeCount = int(citationTag.contents[0].split(" ")[2])
print citeCount
