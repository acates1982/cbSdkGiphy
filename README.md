
<p align="center">
  <img src="https://experts-cb-sdk-giphy.herokuapp.com/experts-logo.png" width="150" title="Marketing Cloud Experts">
</p>

# Content Builder SDK - Giphy Selector 9000

<p align="center">
  <img src="https://experts-cb-sdk-giphy.herokuapp.com/giphy-selector.png" width="100%" title="Giphy Selector 9000">
</p>

## App Overview

* This SDK app provides a way search giphy for an image, take additional input from the block, and render the image in the email.

## Code Over
* The application was written in Node.js. Express is used as the framework with EJS as the view engine.
* 3 Total Routes - 1 View
  * index - home page for app that provides the interface the user will engage with.
  * getTrending
  * getSearch

## Install In Your Environment
* Must have a working Heroku Account to host app
* Select the Deploy to Heroku button below
* Fill out the environment variables
	* APIKEY -
    * Create a new app - https://developers.giphy.com/dashboard/?create=true
    * Standard giphy API limits apply based on the API key provided in configuration.
* Create an Installed Package and add a component type of Custom Content Block. Use the Heroku app URL as the Endpoint URL when configuring this component.

<a href="https://www.heroku.com/deploy/?template=https://github.com/acates1982/cbSdkGiphy">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
