#Improved Starter Ionic Application Template with Parse Integration

Based mostly on the Starters made by ![aaronksaunders](https://github.com/aaronksaunders/parse-starter-ionic) and ![alevicki](https://github.com/alevicki/ionic-parse-starter)

## Overiew
This  application is provided as a starter to get your [Ionic Framework](http://ionicframework.com/getting-started/) and [Parse Application](https://parse.com/products/core) configured easily. The login flow is based on the two projects mentioned above and some changes have been made in order to make it compatible with a tabbed layout as well as a leftMenu that can be use for navigation.

Templates, controllers and services are nicely separated as in ![aaronksaunders'](https://github.com/aaronksaunders/parse-starter-ionic) project

##Configuration
See Parse.com website for an existing web project to get started [Getting Started](https://www.parse.com/apps/quickstart#parse_data/web/existing).

You just then need to configure the applicationId and javascriptId in app.js.

Using the values from the Parse Console, set the properties in the app.js file section shown below

```javascript,linenums=true
    .value('ParseConfiguration', {
        applicationId: "SET-THIS-USING-PARSE-APPLICATION-ID",
        javascriptKey: "SET-THIS-USING-PARSE-JAVASCRIPT-KEY"
    })
}
```
## Starter App Project Structure
The starter app is a Two-Tab based app with a Login Screen and an Account Creation Screen. The application will create Parse Users for you after it is configured properly.

![For more configuration see aaronksaunders' documentation](https://github.com/aaronksaunders/parse-starter-ionic)

