#!/bin/bash

echo "(Re)Installing dependencies"

npm install --save broccoli-static-compiler

echo "(Re)Installing ember-cli plugins"

npm install --save-dev ember-cli-bootstrap-sass
npm install --save-dev ember-validations

echo "Running 'ember generate' commands"

ember install ember-cli-simple-auth
ember install ember-cli-simple-auth-testing
ember install simple-auth-token
ember install ember-faker
ember install ember-moment

echo "npm install"

npm install

echo "bower install"

bower install
