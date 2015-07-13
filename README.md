# wgbn-angular-http-sync
This small module for **AngularJS** aims to enable synchronous mode of **AJAX** requests in your application.
This module uses **jQuery** as a bridge to implement synchronous requests.

[Este pequeno módulo para AngularJs tem como objetivo habilitar requisições AJAX de modo síncrono em sua aplicação.
Este módulo usa o jQuery como ponte para implementar as requisições síncronas.]

## Requirements [Requisitos]

* Angularjs 1.2.x *or higher [ou superior]*
* jQuery 1.10.2 *or higher [ou superior]* (using the Bower, this requirement is solved automatically [utilizando o Bower, este requisito é resolvido automaticamente])

## Installation [Instalação]

Use the **bower** to install wgbn-angular-http-sync in your application or download the zipped package.

[Utilize o **bower** para instalar o wgbn-angular-http-sync em sua aplicação ou faça o download do pacote zipado]

    bower install --save wgbn-angular-http-sync

So make reference to scripts in your index.html:

[Então faça referência aos scripts em seu index.html]:

    <script src="bower_components/jquery/jquery.min.js"></script>
    <script src="bower_components/wgbn-http-sync/dist/wgbnHttpSync.js"></script>
**Note:** Call the first jQuery

**[Nota:** Chame o jQuery primeiro]

## Installation on AnglularJS [Instalação no AngularJS]

In your app, import the wgbnHttpSync for your scope:

[Em seu app, importe o wgbnHttpSync para seu scopo]:

    var app = angular.module('myApp' ['wgbnHttpSync']);

and in your controller just use:

[e em seu controller basta usar]:

    app.controller ('MyController', function (httpSync) {
        var myData = httpSync.getSync('http://some-url/');
        var myOtherData = httpSync.postSync('http://some-url/', {param1: 'value', param2: 'value'});
    });