import frontmatter
import os

f = open('scholar_data.txt', 'w')
for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)
    post = frontmatter.load(filepath)
    title = post['title']
    doi = post['doi']
    citation_count = post['citation_count']
    f.write("- title: "+title+"\n");
    f.write("  doi: "+doi+"\n");
    f.write("  citedby: "+str(citation_count)+"\n");
f.close();
