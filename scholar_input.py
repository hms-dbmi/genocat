import scholarly
import frontmatter

post = frontmatter.load('_tools/CGView.markdown')
f = open('_data/scholar_data.txt', 'w')
paper_title = post['paper_title']
title = post['title']
search_query = scholarly.search_pubs_query(paper_title)
f.write("- title: "+title+"\n  "+str(next(search_query))+"\n\n")
f.close()
