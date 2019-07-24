#!/bin/bash

echo "travis event type is $TRAVIS_EVENT_TYPE"
cron_var="cron"
push_var="push"
if [ "$TRAVIS_EVENT_TYPE" = "$cron_var" ]; then
  # python scholar_input.py
  python data_splice.py
  python to_frontmatter.py
elif [ "$TRAVIS_EVENT_TYPE" = "$push_var" ]; then
  echo "travis event type is not cron"
fi
