module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('error_404');
    $stateProvider
        .state("dashboard",{
            url:"/",
            templateUrl:"views/dashboard.html",
            controller:"DashboardCtrl",
            data: {needLogin: true}
        })

        /*---NotifiInstall routes start*/

        .state("notificationInstalls",{
            url:"/:item/:action/{id:int}",
            templateUrl: function ($stateParams) {
                return ($stateParams.action == 'remove') ? null : 'views/mixed/'+$stateParams.item+".html";
            },
            controller:"NotifInstallCtrl",
            data: {needLogin: true}
        })

        /*---NotifiInstall routes end*/

        /*---User routes start---*/

        .state("users",{
            url:"/users",
            templateUrl:"views/users.html",
            controller:"UserCtrl",
            data: {needLogin: true}
        })

        .state('actionUser',{
            url:'user/:action/{id:int}',
            templateUrl: function ($stateParams) {
                return ($stateParams.action == 'remove') ? null : 'views/user/'+$stateParams.action+".html";
            },
            controller:"UserCtrl",
            data: {needLogin: true}

        })

        /*---User routes end---*/

        /*---Job routes start---*/

        .state("jobs",{
            url:"/jobs",
            controller:"JobCtrl",
            templateUrl:"views/jobs.html",
            data: {needLogin: true}
        })
        .state("actionJob",{
            url:"/job/:action/{id:int}",
            params:{
                id:{squash: true, value: null}
            },
            templateUrl: function ($stateParams) {
                return ($stateParams.action == 'remove') ? null : 'views/job/'+$stateParams.action+".html";
            },
            controller:"JobCtrl",
            data: {needLogin: true}
        })

        /*---Job routes end---*/

        /*---Message routes start---*/

        .state("messages",{
            url:"/messages",
            controller:"MessageCtrl",
            templateUrl:"views/messages.html",
            data: {needLogin: true}
        })
        .state("actionMessage",{
            url:"/message/:action/{id:int}",
            params:{
                id:{squash: true, value: null}
            },
            templateUrl: function ($stateParams) {
                return ($stateParams.action == 'remove') ? null : 'views/message/'+$stateParams.action+".html";
            },
            controller:"MessageCtrl",
            data: {needLogin: true}
        })

        /*---Message routes end---*/

        /*---Position routes start---*/

        .state("positions",{
            url:"/positions",
            controller:"PositionCtrl",
            templateUrl:"views/positions.html",
            data: {needLogin: true}
        })
        .state("actionPosition",{
            url:"/position/:action/{id:int}",
            params:{
                id:{squash: true, value: null}
            },
            templateUrl: function ($stateParams) {
                return ($stateParams.action == 'remove') ? null : 'views/position/'+$stateParams.action+".html";
            },
            controller:"PositionCtrl",
            data: {needLogin: true}
        })
        .state("login",{
            url:"/login",
            templateUrl:"views/login.html",
            controller:"LoginCtrl",
            data: {needLogin: false}
        })
        .state("logout",{
            url:"/logout",
            controller:['localStorageService','$state',function(localStorageService,$state){
                localStorageService.set('isLoggedIn',false);
                location.href = "#/login";
                location.reload(true);
            }],
            data: {needLogin: true}
        })
        /*---Position routes end---*/
        .state('error_404',{
            url:"/error_404",
            templateUrl:"views/error_404.html",
            data: {needLogin: false}
        });
};
