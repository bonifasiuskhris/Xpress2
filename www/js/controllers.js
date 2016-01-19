angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ProjectCtrl', function($scope) {
  $scope.projects = [
    { title: 'FIX MY HOME', id: 1 },
    { title: 'FIX MY HOME', id: 2 },
    { title: 'FIX MY HOME', id: 3 },
    { title: 'FIX MY HOME', id: 4 },
    { title: 'FIX MY HOME', id: 5 },
    { title: 'FIX MY HOME', id: 6 }
  ];

  $scope.createproject = function(task) {
    $scope.projects.push({
      title: project.title
    });
    project.title = "";
  };
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.Devlogin = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('app.home');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

//MY controller

.controller('AccountCtrl', function($scope){
  $scope.AccMenu = [
    {name: 'Profile', id:1},
    {name: 'Change Password', id:2},
    {name: 'My Wallet', id:3},
    {name: 'Project History', id:4},
  ];
})

.controller('AccountMenuCtrl', function($scope, $stateParams) {
});