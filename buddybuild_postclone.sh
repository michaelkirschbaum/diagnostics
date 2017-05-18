#!/usr/bin/env bash

pod repo add Pods https://bitbucket.org/carfit_platform/pods.car.fit.git

sudo gem install xcodeproj
brew update
brew install watchman
watchman watch-del-all
rm -rf node_modules && npm install
npm start -- --reset-cache

