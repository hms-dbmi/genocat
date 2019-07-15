f1 = open('_data/raw_scholarly.txt', 'r')
f2 = open('scholar_data.txt', 'w')
f3 = open('_data/scholar_data.yml', 'w')
for line in f1:
    if line[0:9] == "- title: ":
        curr_tool = line[9:]
        f2.write(line)
        f3.write(line)
    if line[2:5] == "doi":
        f2.write(line)
        f3.write(line)
    if line[2:9] == "citedby":
        f2.write("  citedby: "+line[12:].replace(',', ''))
        f3.write("  citedby: "+line[12:].replace(',', ''))
f1.close()
f2.close()
f3.close()
