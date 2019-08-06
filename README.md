# GenoCAT

GenoCAT uses Jekyll plugins beyond those supported by GitHub Pages.
Instead, when the master branch is updated, Travis builds `_site` and pushes it
to the appropriate S3 bucket. For local development:

```
$ gem install bundler
$ bundle install
$ jekyll serve &
```
Jekyll source code for [genocat.tools](http://genocat.tools/). 

(Need to set up your own Travis/Jekyll/S3 site? See [generate-static-site](https://github.com/hms-dbmi/generate-static-site).)

##Adding New Tools
If you would like to contribute and add a tool to GenoCAT, fork our repository on Github. Using template.md, create a markdown file for your tool and upload it into `_tools`. In `assets`, upload a screenshot of your tool and make sure the "images: " frontmatter in your markdown file has the correct path (ex. /assets/imagename.png). Create a new branch for your commit and start a pull request.

##CSV to yaml
To add or edit tools from a CSV file, update or replace the data.csv file and run the following:
```
$ python csv_to_yaml/csv_to_yaml.py
```
