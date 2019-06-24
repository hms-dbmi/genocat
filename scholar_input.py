import scholarly

title = 'CGView - Circular Genome Viewer'
paper_title = 'CiVi: circular genome visualization with unique features to analyze sequence elements'
search_query = scholarly.search_pubs_query(paper_title)

f2 = open('_data/scholar_data.txt', 'w')
f2.write("- title: '"+title+"'\n"+"  ")
f2.write(str(next(search_query))+"\n\n")
f2.close();

#f2 = open('_data/scholar_data.txt', 'a')
#for post in site.tools:
    #paper_title = post.paper_title
    #f2.write("- paper title: '"+paper_title+"'\n"+"  ")
#f2.close()
