module.exports = function($scope,$state,$stateParams,$JobSrv){

    if(typeof $stateParams.action != 'undefined'){
        switch ($stateParams.action)
        {
            case "view":
                $JobSrv.getOne($stateParams.id).then(function (response) {
                    $scope.job = response.data;
                });
                break;
            case "new":
                $scope.job = {};
                $scope.saveJob = function (){

                    /*---Validation and other actions---*/

                    //after all actions
                    $JobSrv.postData($scope.job).then(function (response) {
                        //do something with response
                    });
                };
                break;
            case "edit":
                $scope.job = {};
                $scope.updateJob = function (){

                    /*---Validation and other actions---*/

                    //after all actions
                    $JobSrv.updateData($stateParams.id,$scope.job).then(function (response) {
                        //do something with response
                    });
                };
                break;
            case "remove":
                $scope.removeJob = function () {
                    $JobSrv.deleteData($stateParams.id).then(function (response) {
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
        $JobSrv.getAll().then(function (response) {
            $scope.jobs = response.data;
        });
    }
};

