module.exports = function($scope,$state,$stateParams,$MessageSrv){

    if(typeof $stateParams.action != 'undefined'){
        switch ($stateParams.action)
        {
            case "view":
                $MessageSrv.getOne($stateParams.id).then(function (response) {
                    $scope.message = response.data;
                });
                break;
            case "new":
                $scope.message = {};
                $scope.saveMessage = function () {

                    /*---Validate user data and other actions---*/

                    //after all actions
                    $MessageSrv.postData($scope.message).then(function (response) {
                        //do something with response
                    });

                };
                break;
            case "edit":
                $scope.message = {};
                $scope.updateMessage = function () {
                    /*---Validate user data and other actions---*/

                    //after all actions
                    $MessageSrv.updateData($scope.message).then(function (response) {
                        //do something with response
                    });
                };
                break;
            case "remove":
                $scope.removeMessage = function () {
                    $MessageSrv.deleteData($stateParams.id).then(function (response) {
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
        $MessageSrv.getAll().then(function (response) {
            $scope.messages = response.data;
        });
    }
};
