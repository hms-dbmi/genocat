import os

def get_attribute(attr, lines):
    length = len(attr)
    j=0
    while j<len(lines):
        if lines[j][0:length] == attr:
            words = lines[j].split(" ")
            # if doi, citation count, or pub year is not filled in, insert "0"
            if len(words) == 1 or words[1] == "\n":
                lines[j] = attr+": 0\n"
            return(lines[j])
        j+=1
    return 0

f1 = open('scholar_data.txt', 'w+')
for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)
    f_tool = open(filepath, 'r')
    lines = f_tool.readlines()
    title = str(get_attribute('title', lines))
    doi = str(get_attribute('doi', lines))
    pub_year = str(get_attribute('pub_year', lines))
    citation_count = str(get_attribute('citation_count', lines))
    f_tool.close()
    f1.write("- "+title)
    f1.write("  "+doi)
    f1.write("  "+pub_year)
    f1.write("  "+citation_count)
f1.close()
