f1 = open('_data/raw_scholar.txt', 'r')
f2 = open('_data/scholar_data.yml', 'w')
for line in f1:
    if line[0:9] == "- title: ":
        curr_tool = line[9:]
        f2.write(line)
    if line[2:9] == "citedby":
        f2.write("  cited by: "+line[12:].replace(',', ''))
f1.close()
f2.close()
