f1 = open('_data/raw_scholarly.txt', 'r')
f2 = open('scholar_data.txt', 'w')
for line in f1:
    if line[0:9] == "- title: ":
        curr_tool = line[9:]
        f2.write(line)
    if line[2:5] == "doi":
        f2.write(line)
    if line[2:10] == "pub_year":
        f2.write(line)
    if line[2:9] == "citedby":
        f2.write("  citation_count: "+line[12:].replace(',', ''))
f1.close()
f2.close()
