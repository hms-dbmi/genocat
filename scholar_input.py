import scholarly
import frontmatter
import os

f = open('_data/raw_scholarly.txt', 'a')
for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)
    post = frontmatter.load(filepath)
    title = post['title']
    paper_title = post['paper_title']
    doi = post['doi']
    # search_query = scholarly.search_pubs_query(paper_title)
    # f.write("- title: "+title+"\n  "+"doi: "+doi+"\n  "+str(next(search_query))+"\n\n")
    f.write("- title: "+title+"\n  "+"doi: "+str(doi)+"\n\n")
f.close()
