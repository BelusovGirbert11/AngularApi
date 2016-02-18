module.exports = function($scope,$state,$stateParams,$PositionSrv){

    if(typeof $stateParams.action != 'undefined'){
        switch ($stateParams.action)
        {
            case "view":
                $PositionSrv.getOne($stateParams.id).then(function (response) {
                    $scope.position = response.data;
                });
                break;
            case "new":
                $scope.position = {};
                $scope.savePosition = function () {

                    /*---Validate user data and other actions---*/

                    //after all actions
                    $PositionSrv.postData($scope.position).then(function (response) {
                        //do something with response
                    });

                };
                break;
            case "edit":
                $scope.position = {};
                $scope.updatePosition = function () {
                    /*---Validate user data and other actions---*/

                    //after all actions
                    $PositionSrv.updateData($scope.position).then(function (response) {
                        //do something with response
                    });
                };
                break;
            case "remove":
                $scope.removePosition = function () {
                    $PositionSrv.deleteData($stateParams.id).then(function (response) {
                        //do something with response
                    });
                };
                break;
            default:
                $state.go('error_404');
                break;
        }
    }
    else {
        $PositionSrv.getAll().then(function (response) {
            $scope.positions = response.data;
        });
    }
};
