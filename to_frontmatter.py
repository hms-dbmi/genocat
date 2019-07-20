import frontmatter
import os

f_data = open('scholar_data.txt', 'r')
attributes = f_data.readlines()
for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)
    post = frontmatter.load(filepath)
    doi = post['doi']
    f_tool = open(filepath, 'r')
    i=0
    citedby=0
    while i<len(attributes):
        # print(attributes[i])
        string = "  doi: "+str(doi)+"\n"
        # print(string)
        if attributes[i] == string:
            citedby = attributes[i+1]
            break
        i+=1
    citeCount = int(citedby[11:])
    lines = f_tool.readlines()
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
