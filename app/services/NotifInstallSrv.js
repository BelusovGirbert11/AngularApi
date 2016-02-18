module.exports = function ($http) {

    return {
        putApiData: function (data) {
            return $http.put(apiURL+'api/notificationInstallations',data);
        },
        deleteApiData: function () {
            return $http.put(apiURL+'api/notificationInstallations');
        },
        putPushData: function (id,data) {
            return $http.put(apiURL+'push/installations/'+id,data);
        },
        deletePushData: function (id) {
            return $http.put(apiURL+'api/installations/'+id);
        }
    };
};

