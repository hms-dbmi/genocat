import scholarly
import frontmatter
import os

# post = frontmatter.load('_tools/CGView.markdown')
f = open('_data/scholar_data.txt', 'w')
# paper_title = post['paper_title']
# title = post['title']
# search_query = scholarly.search_pubs_query(paper_title)
# f.write("- title: "+title+"\n  "+str(next(search_query))+"\n\n")
# f.close()

for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)
    post = frontmatter.load(filepath)
    title = post['title']
    paper_title = post['paper_title']
    search_query = scholarly.search_pubs_query(paper_title)
    f.write("- title: "+title+"\n  "+str(next(search_query))+"\n\n")
f.close()
