#!/bin/bash

set -e

cd dist/

cp ../words.json ./

git init
git config user.name "Alexey Golovnya"
git config user.email "alexey.golovnya@gmail.com"

git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://${GITHUB_TOKEN}@${GITHUB_REP}" master:master > /dev/null 2>&1
