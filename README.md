BUILD NUMBERING

In order to ensure that we are numbering builds correctly, please find the attached build numbering schema for Android:

<major>.<minor>.<subminor>

Up until now now - we have simply increased from 0 to whatever (iterations), but moving forward, we want to show a proper schema.

CURRENT DEMO APP BUILDS: 00.00.0xxx

Where xxx = the current build ID.

For the API version, we shall us:

<major>.<minor>.<subminor> as well, however, only one digit shall be used for each:

1.2.3 (current release iOS API version)

As this is release of the v2.0 back-end, we shall use the following for our first public release.

APP: 02.00.0xxx API: 2.0.x


# About this Repository #

This repository contains the build infrastructure for the iOS and Android REACT Native CARFIT applications.

## Setting-up your REACT Native Project ##

In the scaffolding branch, there is a "docs" directory.  This directory is where you will find the information needed to setup your REACT Native project.

Start by following the instructions here:

* ReactNative_CARFIT / docs / SETUP.md 

Pay special attention to include:

* Android SDK Build-tools (**Important: Rev. 23.0.1**)

You may need to load the Android version of the project into Android Studio in order to resolve dependencies if at first the project won't build.

You can find more information here:
https://facebook.github.io/react-native/docs/getting-started.html

STILL TO BE WRITTEN:

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact