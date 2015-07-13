# wgbn-angular-http-sync
This small module for **AngularJS** aims to enable synchronous mode of **AJAX** requests in your application.
This module uses **jQuery** as a bridge to implement synchronous requests.

## Requirements

* Angularjs 1.2.x *or higher*
* jQuery 1.10.2 *or higher* (using the Bower, this requirement is solved automatically)

## Installation

Use the **bower** to install wgbn-angular-http-sync in your application or download the zipped package.

    bower install --save wgbn-angular-http-sync

So make reference to scripts in your index.html:

    <script src="bower_components/jquery/jquery.min.js"></script>
    <script src="bower_components/wgbn-http-sync/dist/wgbnHttpSync.js"></script>
**Note:** Call the first jQuery

## Installation on AnglularJS

In your app, import the wgbnHttpSync for your scope:

    var app = angular.module('myApp' ['wgbnHttpSync']);

and in your controller just use:

    app.controller ('MyController', function (httpSync) {
        var myData = httpSync.getSync('http://some-url/');
        var myOtherData = httpSync.postSync('http://some-url/', {param1: 'value', param2: 'value'});
    });