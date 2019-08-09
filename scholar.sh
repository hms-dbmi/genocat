#!/bin/bash

> "scholarpy.txt"
cd _tools
for f in *; do
  input="$f"
  while IFS= read -r line
  do
    if [ "${line:0:13}" = "paper_title: " ]; then
      echo "${line:13}"
      paper_title="${line:13}"
      python ../scholar.py/scholar.py -c 1 --phrase "$paper_title" --title-only "$paper_title"
    fi
  done < "$input"
done

# input="_tools/weblogo.md"
# while IFS= read -r line
# do
#   if [ "${line:0:13}" = "paper_title: " ]; then
#     echo "${line:13}"
#     paper_title="${line:13}"
#     python scholar.py/scholar.py -c 1 --phrase "$paper_title" --title-only "$paper_title"
#   fi
# done < "$input"
