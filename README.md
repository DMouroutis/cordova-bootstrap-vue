# cordova-bootstrap-vue

A quick boilerplate setup with Cordova, Bootstrap, & Vue.js, (font-awesome included)

## Quick Step Guide
- npm install
- npm run build
- cordova build (ios/android)
- cordova run (ios/android)

## Cordova Prerequisites
- Install [cordova package](https://www.npmjs.com/package/cordova) globally
- Install any necessary device emulators (ios/android) depending your OS. More information can be found in these links depending on the platform: [iOS](https://cordova.apache.org/docs/en/11.x/guide/platforms/ios/index.html), [android](https://cordova.apache.org/docs/en/11.x/guide/platforms/android/index.html)
- Include the desired platforms -only needed once- in your project (cordova platform add ios/android)


## Vue App Build Setup
You are able to test the application in your browser, same as a vue.js project with the following commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Cordova setup
Based on cordova-vue concept by this [guide](https://medium.com/@valeriocapogna/how-to-setup-a-cordova-app-using-vue-js-8ba1315b9666)

In order to build the application for a device you must first build the vue.js application (npm run build)

``` bash
# build the web project for production
npm run build

# (one time) add the desired platforms
cordova platform add ios
cordova platform add android

# compile the code for the device
cordova build ios
cordova build android

# run the device emulator
cordova run ios
cordova run android
```

## With the power of [Bootstrap Vue](https://bootstrap-vue.org/docs/components) and (optional) [Font Awesome](https://fontawesome.com/)
