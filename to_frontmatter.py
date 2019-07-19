import frontmatter
import os

f_data = open('scholar_data.txt', 'w')
for file in os.listdir('_tools'):
    filepath = os.path.join('_tools', file)
    f_tool = open(filepath, 'a')
    f_tool.close()
f_data.close()
