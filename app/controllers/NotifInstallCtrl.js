module.exports = function($scope,$state,$stateParams,$NotifInstallSrv){

    if(typeof $stateParams.item != 'undefined')
    {
        if(typeof $stateParams.action != 'undefined'){
            switch ($stateParams.item)
            {
                case "notification":
                    switch ($stateParams.action)
                    {
                        case "edit":
                            $scope.notification = {};
                            $scope.updateNotification = function () {
                                /*---Validate user data and other actions---*/

                                //after all actions
                                $NotifInstallSrv.putApiData($scope.notification).then(function (response) {
                                    //do something with response
                                });
                            };
                            break;
                        case "remove":
                            $scope.removeNotification = function () {
                                $NotifInstallSrv.deleteApiData().then(function (response) {
                                    //do something with response
                                });
                            };
                            break;
                        default:
                            $state.go('error_404');
                            break;
                    }
                    break;
                case "installation":
                    switch ($stateParams.action)
                    {
                        case "edit":
                            $scope.installation = {};
                            $scope.updateInstallation = function () {
                                /*---Validate user data and other actions---*/

                                //after all actions
                                $NotifInstallSrv.putPushData($scope.installation).then(function (response) {
                                    //do something with response
                                });
                            };
                            break;
                        case "remove":
                            $scope.removeInstallation = function () {
                                $NotifInstallSrv.deletePushData($stateParams.id).then(function (response) {
                                    //do something with response
                                });
                            };
                            break;
                        default:
                            $state.go('error_404');
                            break;
                    }
                    break;
            }
        }
        else {
            $state.go('error_404');
        }
    }
    else {
        $state.go('error_404');
    }
};
