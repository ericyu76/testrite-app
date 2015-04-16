// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  
  .state('app.groupInfo', {
    url: "/groupInfo",
    views: {
      'menuContent': {
        templateUrl: "templates/groupInfo/groupInfo.html",
        controller: 'GroupInfoCtrl'
      }
    }
  })

  .state('app.groupInfo-vision', {
    url: "/groupInfo/vision",
    views: {
      'menuContent': {
        templateUrl: "templates/groupInfo/vision.html",
        controller: 'VisionCtrl'
      }
    }
  })

  .state('app.groupInfo-foundersMessage', {
    url: "/groupInfo/foundersMessage",
    views: {
      'menuContent': {
        templateUrl: "templates/groupInfo/foundersMessage.html",
        controller: 'VisionCtrl'
      }
    }
  })

  .state('app.qrcode', {
    url: "/qrcode",
    views: {
      'menuContent': {
        templateUrl: "templates/qrcode.html",
        controller: 'QRCodeCtrl'
      }
    }
  })

  .state('app.groupInfo-overview', {
    url: "/groupInfo/overview",
    views: {
      'menuContent': {
        templateUrl: "templates/groupInfo/overview.html",
        controller: 'OverviewCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/groupInfo');
});
