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

.controller('OverviewCtrl', function() {
})

.controller('QRCodeCtrl', function($scope, $ionicModal, QRService) {
  $scope.qrData = {};

  $ionicModal.fromTemplateUrl('templates/genqr.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.showGenerate = function(){
    $scope.modal.show();
  };

  $scope.closeGenerate = function(){
    $scope.modal.hide();
  };

  $scope.generate = function(qrData){
    setupqr();
    doqr(qrData.qrValue);
    $scope.qrTextDisplay = qrData.qrValue;
    $scope.closeGenerate();
  };

  $scope.doScan = function(){
    
    $scope.scanResultValue0 = '';
    $scope.scanResultValue1 = '';

    var promise = QRService.scan();
    promise.then(
      function(result) {
        $scope.scanResultValue0 = result[0];
        $scope.scanResultValue1 = result[1];
        myurl = result[0];
        var scanResult = {
          scanDate: Utils.getDateFormatStr(new Date()),
          resultValue: result[0],
          resultType: result[1]
        };

        var qrHistoryData = [];
        var qrHistoryStr = localStorage.getItem("qrHistoryData");
        if(qrHistoryStr !== null){
          qrHistoryData = JSON.parse(qrHistoryStr);
        }
        qrHistoryData.push(scanResult);
        localStorage.setItem('qrHistoryData',angular.toJson(qrHistoryData));

      },
      function(error) {
        $scope.scanResult0 = error;
      }
    );
  };

  
})

.controller('GroupInfoCtrl', function($scope, $stateParams) {
  $scope.groupInfos =[
    {name: 'Overview', routeUrl: 'overview', id: '1', imageUrl: 'tr-logo.jpg'},
    {name: 'Vision', routeUrl: 'vision', id: '2', imageUrl: 'groupinfo-vision.jpg'},
    {name: 'Founders Message', routeUrl: 'overview', id: '3', imageUrl: 'groupinfo-foundermessage.jpg'},
    {name: 'CEOs Message', routeUrl: 'overview', id: '4', imageUrl: 'groupinfo-ceo-message.jpg'},
    {name: 'Milestone', routeUrl: 'overview', id: '5', imageUrl: 'groupinfo-milestone.jpg'},
    {name: 'Awards', routeUrl: 'overview', id: '6', imageUrl: 'groupinfo-award.jpg'}
  ];
});
