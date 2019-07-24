if [[ "$TRAVIS_EVENT_TYPE" == "$cron"]]; then
  echo "$cron"
  python data_splice.py
  python to_frontmatter.py
elif [[ "$TRAVIS_EVENT_TYPE" != "$cron"]]; then
  echo "travis event type is not cron"
fi
