module.exports = function ($http) {
    return {
        postData: function (userData) {
            return $http.post(apiURL+'api/register',userData);
        }
    };
};
