var myApp = angular.module('myApp', [
    'ui.bootstrap',
    'ui.router',
    'ngSanitize',
    'ngAnimate',
    'ngTable'

]);
myApp.run(function() {
    console.log("Run");
});
