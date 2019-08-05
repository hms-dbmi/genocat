#!/bin/bash
paper_title="A low-latency, big database system and browser for storage, querying and visualization of 3D genomic data"
# python scholar.py/scholar.py -c 1 --phrase "$paper_title" --title-only "$paper_title"

cd _tools
for f in *; do
  echo "hi"
done

input="weblogo.md"
while IFS= read -r line
do
  if [ "${line:0:13}" = "paper_title: " ]; then
    echo "${line:13}"
  fi
done < "$input"
