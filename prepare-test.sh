#!/bin/bash
cd sistearth-backend
mvn clean package install -Dmaven.test.skip=true -am -pl sistearth-docker-server
mvn clean package install -Dmaven.test.skip=true -am -pl sistearth-docker-database
cd ..
