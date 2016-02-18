module.exports = function ($http) {
    return {
        /*
        * get all dashboard data from api
        * */
        getAll: function () {
            return $http.get(apiURL+'api/dashboard');
        }
    };
};
