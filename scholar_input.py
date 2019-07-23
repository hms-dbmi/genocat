import scholarly
import os

def get_attribute(attr, lines):
    length = len(attr)
    j=0
    while j<len(lines):
        if lines[j][0:length] == attr:
            return(lines[j])
        j+=1
    return 0

f1 = open('_data/raw_scholarly.txt', 'w')
for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)
    f_tool = open(filepath, 'r')
    lines = f_tool.readlines()
    title = get_attribute('title', lines)
    paper_title = get_attribute('paper_title', lines)
    doi = get_attribute('doi', lines)
    pub_year = get_attribute('pub_year', lines)
    search_query = scholarly.search_pubs_query(paper_title)
    f_tool.close()
    f1.write("- "+title+"  "+doi+"  "+pub_year+"  "+str(next(search_query))+"\n\n")
f1.close()
