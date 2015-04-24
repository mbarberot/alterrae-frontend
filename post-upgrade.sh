#!/bin/bash

echo "(Re)Installing dependencies"

npm install --save broccoli-static-compiler

echo "(Re)Installing ember-cli plugins"

npm install --save-dev ember-cli-bootstrap-sass
npm install --save-dev ember-cli-moment
npm install --save-dev ember-cli-simple-auth
npm install --save-dev ember-cli-simple-auth-testing
npm install --save-dev ember-cli-simple-auth-token
npm install --save-dev ember-faker
npm install --save-dev ember-validations

echo "Running 'ember generate' commands"

ember generate ember-cli-simple-auth
ember generate ember-cli-simple-auth-testing
ember generate simple-auth-token
ember generate ember-faker
