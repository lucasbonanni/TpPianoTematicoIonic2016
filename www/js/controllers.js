angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover,$timeout,$cordovaNativeAudio,$ionicPlatform) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  var navIcons = document.getElementsByClassName('ion-navicon');
  for (var i = 0; i < navIcons.length; i++) {
      navIcons.addEventListener('click', function () {
          this.classList.toggle('active');
      });
  }

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

      // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Popover Title</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });

})

.controller('PlaylistsCtrl',function($scope,$ionicPlatform, $cordovaFile,$cordovaDevice,$timeout,$interval, $stateParams) {
  /*$scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];*/
  /*
  document.addEventListener('deviceready',function(){
      $cordovaFile.createDir(cordova.file.dataDirectory,"new_dir",false);

      $cordovaFile.CreateFile(cordova.file.dataDirectory,"new_text.txt",true);
  }); */
    /*
    $scope.crearArchivo = function(){
      document.addEventListener(
        'deviceready',function()
        {
          $cordovaFile.CreateFile(cordova.file.dataDirectory,"new_text.txt",true)
          .then(function (success) {
            alert(success);
          }, function (error) {
            alert(error);
          };
        }
    )};*/
    $scope.exito = {};
    alert('function crear archivo');
    $scope.crearArchivo = function(){
      alert('function crear archivo');
      $cordovaFile.CreateFile(cordova.file.externalRootDirectory,"new_text.txt",true)
        .then(function(success){
          $scope.exito = angular.toJson(success);
          alert($scope.exito);
        },function(error){
           $scope.exito = angular.toJson(error);

          console.log($scope.exito);
          alert($scope.exito);

        });

      $cordovaFile.getFreeDiskSpace()
        .then(function(success){
          alert(success);
        },function(error){
          alert(error);
        });
    };


/*
    $scope.grabarArchivo= function(){
      document.addEventListener('deviceready',function(){
        $cordovaFile.writeExistingFile(cordova.file.dataDirectory,"new_text.txt","test",true);
      }
    };


    $scope.leerArchivo= function(){
      document.addEventListener('deviceready',function(){
        $cordovaFile.readAsText(cordova.file.dataDirectory, $scope.inputs.readFile)
      .then(function (success) {
         alert(success);
      }, function (error) {
        alert(error);
      });

      }
    }*/
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
