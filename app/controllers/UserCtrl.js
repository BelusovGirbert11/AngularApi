module.exports = function($scope,$state,$stateParams,$UserSrv){
    if(typeof $stateParams.action != 'undefined'){
        switch ($stateParams.action)
        {
            case "view":
                $UserSrv.getAll($stateParams.id).then(function (response) {
                    $scope.user = response.data;
                });
                break;
            case "edit":
                $scope.user = {};

                $scope.updateUser = function () {

                    /*---Validate user data and other actions---*/

                    //after all actions
                    $UserSrv.updateData($stateParams.id,$scope.user).then(function(response){
                        //do something with response
                    });

                };
                break;
            case "remove":
                $scope.removeUser = function () {

                    /*---Validate user data and other actions---*/

                    //after all actions
                    $UserSrv.removeData($stateParams.id).then(function (response) {
                        //do something with response
                    });

                };
                break;
            default:
                $state.go('error_404');
                break;
        }
    }
    else
    {
        $UserSrv.getAll().then(function (response) {
            $scope.users = response.data;
        });
    }
};
