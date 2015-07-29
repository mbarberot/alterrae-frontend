#!/bin/bash

echo "(Re)Installing dependencies"

npm install --save broccoli-static-compiler

echo "(Re)Installing ember-cli plugins"

npm install --save-dev ember-cli-sass
npm install --save-dev ember-cli-bootstrap-sass
npm install --save-dev ember-cli-simple-auth-token
npm install --save-dev ember-validations

echo "Running 'ember generate' commands"

ember install ember-cli-simple-auth
ember install ember-cli-simple-auth-testing
ember install ember-faker
ember install ember-moment

ember generate simple-auth-token

echo "npm install"

npm install

echo "bower install"

bower install
