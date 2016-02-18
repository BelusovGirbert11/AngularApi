/*---Require angular and angular ui router---*/
require('angular');
require('angular-ui-router');
require('angular-local-storage');
/*---Register new angular application---*/
var app = angular.module('app',['ui.router','LocalStorageModule']);

/*
* The URL to work with api add / as last character of URL
* */
window.apiURL = "";

/*
 * Services
 */

/*---Dashboard service---*/
var DashboardSrv    = require('./services/DashboardSrv');
app.factory('DashboardSrv',DashboardSrv);

/*---User service---*/
var UserSrv         = require('./services/UserSrv');
app.factory('UserSrv',UserSrv);

/*---Job service---*/
var JobSrv          = require('./services/JobSrv');
app.factory('JobSrv',JobSrv);

/*---Login service---*/
var LoginSrv        = require('./services/LoginSrv');
app.factory('LoginSrv',LoginSrv);

/*---Register service---*/
var RegisterSrv        = require('./services/RegisterSrv');
app.factory('RegisterSrv',RegisterSrv);

/*---Message service---*/
var MessageSrv      = require('./services/MessageSrv');
app.factory('MessageSrv',MessageSrv);

/*---Position service---*/
var PositionSrv      = require('./services/PositionSrv');
app.factory('PositionSrv',PositionSrv);

/*---NotifInstall service---*/
var NotifInstallSrv      = require('./services/NotifInstallSrv');
app.factory('NotifInstallSrv',NotifInstallSrv);


/*
 * Controllers
 */

/*---Dashboard controller---*/
var DashboardCtrl   = require('./controllers/DashboardCtrl');
app.controller("DashboardCtrl", ['$scope','DashboardSrv',                       DashboardCtrl]);

/*---User controller---*/
var UserCtrl        = require('./controllers/UserCtrl');
app.controller('UserCtrl',      ['$scope','$state','$stateParams','UserSrv',    UserCtrl]);

/*---Job controller---*/
var JobCtrl         = require('./controllers/JobCtrl');
app.controller('JobCtrl',       ['$scope','$state','$stateParams','JobSrv',     JobCtrl]);

/*---Login controller---*/
var LoginCtrl       = require('./controllers/LoginCtrl');
app.controller('LoginCtrl',     ['$scope','$state','LoginSrv','localStorageService',     LoginCtrl]);

/*---Register controller---*/
var RegisterCtrl       = require('./controllers/RegisterCtrl');
app.controller('RegisterCtrl',  ['$scope','RegisterSrv',                        RegisterCtrl]);

/*---Message controller---*/
var MessageCtrl     = require('./controllers/MessageCtrl');
app.controller('MessageCtrl',   ['$scope','$state','$stateParams','MessageSrv', MessageCtrl]);

/*---Position controller---*/
var PositionCtrl     = require('./controllers/PositionCtrl');
app.controller('PositionCtrl',   ['$scope','$state','$stateParams','PositionSrv', PositionCtrl]);

/*---NotifInstall controller---*/
var NotifInstallCtrl     = require('./controllers/NotifInstallCtrl');
app.controller('NotifInstallCtrl',   ['$scope','$state','$stateParams','NotifInstallSrv', NotifInstallCtrl]);

/*---Require route file---*/
var Routes      = require('./configs/Routes');


app.run(function ($rootScope,$state,localStorageService) {

    $rootScope.isLogged = (localStorageService.get('isLoggedIn') === true) ? true : false;

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        var requireLogin = toState.data.needLogin;
        if (requireLogin && localStorageService.get('isLoggedIn') !== true) {
            event.preventDefault();
            $state.go('login');
        }
        else if(!requireLogin && localStorageService.get('isLoggedIn') === true)
        {
            event.preventDefault();
            $state.go('dashboard');
        }
    });

});

/*---Register route file---*/
app.config(Routes);