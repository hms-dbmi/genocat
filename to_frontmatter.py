import os

def get_attribute(attr, lines):
    length = len(attr)
    j=0
    while j<len(lines):
        if lines[j][0:length] == attr:
            return(lines[j])
        j+=1
    return 0

f_data = open('scholar_data.txt', 'r')
attributes = f_data.readlines()
for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)
    f_tool = open(filepath, 'r')
    lines = f_tool.readlines()
    doi = get_attribute('doi', lines)
    i=0
    citedby="  citation_count: 0"
    while i<len(attributes):
        string = "  "+str(doi)
        if attributes[i] == string:
            citedby = attributes[i+2]
            break
        i+=1
    citeCount = int(citedby[18:])
    j=0
    while j < len(lines):
        string = "citation_count:"
        if lines[j][0:15] == string:
            lines[j] = "citation_count: "+str(citeCount)+"\n"
            break
        j+=1
    f_tool.close()
    out = open(filepath, 'w')
    out.writelines(lines)
    out.close()
f_data.close()
