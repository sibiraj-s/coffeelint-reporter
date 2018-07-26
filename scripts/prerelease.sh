#!/bin/bash

# clear and create dist folder
rm -rf ./dist/
mkdir ./dist/

# copy README, LICENSE, package.json and coffeelintr to dist folder
cp ./README.md ./dist/
cp ./LICENSE ./dist/
cp ./package.json ./dist/
cp ./coffeelint-reporter.js ./dist/

# update package.json's after build
node ./scripts/prepare.js
