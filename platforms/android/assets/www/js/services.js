/* global  angular, cordova*/
'use strict';
angular.module('starter.services', [])

.factory('QRService', function($q) {
  return {
    scan: function(){
      var appKey = '/nBB9DMAEeSFe9woVdXszlTQUv2mCmpMAbmmF81gR9Q';
      var deferred = $q.defer();
        cordova.exec(
        function (resultArray){
          deferred.resolve(resultArray);
        },
       function (error){
          deferred.reject(error);
       }, 
       'ScanditSDK', 
       'scan',
           [appKey,
           {'beep': true,
            '1DScanning' : true,
            '2DScanning' : true}]
       );
      return deferred.promise;
    },
    qrHistory: function(){


    }
  };
})
;


