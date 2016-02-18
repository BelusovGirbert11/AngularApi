module.exports = function ($scope, $RegisterSrv) {

    $scope.user = {};

    $scope.register = function () {
        $RegisterSrv.postData($scope.user).then(function (response) {
            //do something with response
        });
    }

};