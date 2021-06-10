#!/bin/bash

cron_var="cron"
if [ "$TRAVIS_EVENT_TYPE" = "$cron_var" ]; then
  # python python/scholar_input.py
  # python python/data_splice.py
  # python python/to_frontmatter.py
fi
