import os

def get_attribute(attr, lines):
    length = len(attr)
    j=0
    while j<len(lines):
        if lines[j][0:length] == attr:
            return(lines[j])
        j+=1
    return 0

f1 = open('scholar_data.txt', 'w')
for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)
    f_tool = open(filepath, 'r')
    lines = f_tool.readlines()
    title = get_attribute('title', lines)
    doi = get_attribute('doi', lines)
    citation_count = get_attribute('citation_count', lines)
    f_tool.close()
    f1.write("- "+title)
    f1.write("  "+doi)
    f1.write("  "+citation_count)
f1.close()
