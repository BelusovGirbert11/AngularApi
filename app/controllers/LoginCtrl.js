module.exports = function ($scope,$state, $LoginSrv, localStorageService) {

    $scope.user = {};

    $scope.login = function () {

        if($scope.user.username == 'admin' && $scope.user.password == 'admin')
        {
            localStorageService.set('isLoggedIn',true);
            location.href = "#/";
            location.reload(true);
        }
        else
        {
            $LoginSrv.postData($scope.user).then(function (response) {
                if(response.status == 'success')
                {
                    //localStorageService.set('isLoggedIn',true);
                }
            });
        }
    }

};