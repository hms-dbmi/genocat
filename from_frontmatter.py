# import frontmatter
import os

def get_attribute(attr, lines):
    # lines = f_tool.readlines()
    length = len(attr)
    j=0
    while j<len(lines):
        if lines[j][0:length] == attr:
            return(lines[j])
        j+=1
    return 0


f1 = open('scholar_data.txt', 'w')
f2 = open('_data/scholar_data.yml', 'w')
for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)

    # post = frontmatter.load(filepath)
    # title = post['title']
    # doi = post['doi']
    # citation_count = post['citation_count']

    f_tool = open(filepath, 'r')
    lines = f_tool.readlines()
    title = get_attribute('title', lines)
    doi = get_attribute('doi', lines)
    citation_count = get_attribute('citation_count', lines)
    f_tool.close()
    f1.write("- "+title)
    f2.write("- "+title)
    f1.write("  "+doi)
    f2.write("  "+doi)
    f1.write("  "+citation_count)
    f2.write("  "+citation_count)
    # f.write("- title: "+title+"\n");
    # f.write("  doi: "+doi+"\n");
    # f.write("  citedby: "+str(citation_count)+"\n");
f1.close()
f2.close()
