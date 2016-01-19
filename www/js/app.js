// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

//MyState

  .state('login', {
      url: '/login',
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
  })

.state('app.home',{
  url:"/home",
  views: {
    'menuContent': {
      templateUrl: "templates/Home/home.html"
    }
  }
})

.state('app.post',{
  url:"/post",
  views: {
    'menuContent': {
      templateUrl: "templates/post.html"
    }
  }
})

.state('app.myproject',{
  url:"/myproject",
  views: {
      'menuContent': {
      templateUrl: "templates/Project/myproject.html",
      controller: 'ProjectCtrl'
    }
  }
})

.state('app.createproject',{
  url:"/createproject",
  views: {
      'menuContent': {
      templateUrl: "templates/Project/createproject.html",
      controller: 'ProjectCtrl'
    }
  }
})
// .state('app.samplecategory',{
//   url:"/samplecategory",
//   views: {
//     'menuContent': {
//       templateUrl: "templates/sample-category.html"
//     }
//   }
// })

.state('app.account', {
  url:"/account",
  views: {
    'menuContent':{
      templateUrl: "templates/account.html",
      controller: 'AccountCtrl'
    }
  }
})

 .state('app.accountmenu', {
    url: "/account/:accountId",
    views: {
      'menuContent': {
        templateUrl: "templates/account-menu.html",
        controller: 'AccountMenuCtrl'
      }
    }
  })

 // .state('app.post', {
 //  url: "/post",
 //  views {
 //  'menuContent':{
 //  templateUrl: "templates/post.html"
 //      }
 //    }
 // })

//end MyState

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
