var app = angular.module("googleSheets", []);
app.controller("GoogleSheetsDataCtrl", function($scope,$http) {
    $scope.getData = function () {
          $http.get("https://spreadsheets.google.com/feeds/list/1AOrzOdfTSk0AwrDIOe3GGqODanBCT3T2mxIEQVckZds/od6/public/values?alt=json")
            .success(function (data) {
                $scope.entries = data.feed.entry;
            }, function errorCallBack(err) {
         })
    }
    $scope.getData()
});