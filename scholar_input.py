import scholarly

title = 'CGView - Circular Genome Viewer'
paper_title = 'CiVi: circular genome visualization with unique features to analyze sequence elements'
search_query = scholarly.search_pubs_query(paper_title)

f2 = open('_data/scholar_data.yml', 'w')
f2.write("- title: '"+title+"'\n"+"  ")
f2.write(str(next(search_query))+"\n\n")
f2.close();
