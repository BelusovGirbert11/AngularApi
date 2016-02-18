module.exports = function ($http) {
    return {
        /*
        * Will get all users list from api
        * */
        getAll: function () {
            return $http.get(apiURL+'api/users');
        },
        /*
        * Will delete user (by id)
        * */
        deleteData: function (id) {
            return $http.delete(apiURL+'api/users/'+id);
        },
        /*
        * Will update user data
        * */
        updateData:function(id,data){
            return $http.patch(apiURL+'api/users/'+id,data);
        }
    };
};