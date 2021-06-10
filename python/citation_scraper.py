from bs4 import BeautifulSoup
import requests
import urllib
import time
from selenium import webdriver

import sys

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

f = open('../scholarpy.txt', 'a')

# chrome_options = Options()
# chrome_options.add_argument("--headless")

# title = 'Database Resources of the National Center for Biotechnology Information'
title = sys.argv[1]
f.write("- title: "+title+"\n")
title_dict = {'q': title}

query = urllib.urlencode(title_dict)

queryFront = 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C22&'
queryEnd = '&btnG='
fullQuery = queryFront + query + queryEnd

options = webdriver.ChromeOptions()
options.add_argument('headless')
# options.add_argument('window-size=1920x1080')
# options.add_argument("disable-gpu")

driver = webdriver.Chrome('chromedriver', chrome_options=options)



driver.get(fullQuery)
htmlSource = driver.page_source
driver.close()
driver.quit()

content = BeautifulSoup(htmlSource, 'html.parser')

import re
citationTag = None
aTags = content.find_all("a")
for tag in aTags:
    if "scholar?cites" in str(tag):
        citationTag = tag

citeCount = int(citationTag.contents[0].split(" ")[2])
f.write("  citeCount: "+str(citeCount)+"\n")
f.close()
