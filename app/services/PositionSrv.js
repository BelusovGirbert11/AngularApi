module.exports = function ($http) {

    return {
        /*
         * Will get all data from api
         * */
        getAll: function () {
            return $http.get(apiURL+'api/positions');
        },
        /*
         * Will get single (by id) result from api
         * */
        getOne: function (id) {
            return $http.get(apiURL+'api/positions/'+id);
        },
        /*
         * Will send data to api
         * */
        postData: function (data) {
            return $http.post(apiURL+'api/positions',data);
        },
        /*
         * Will send id of position that we want to delete
         * */
        deleteData: function (id) {
            return $http.delete(apiURL+'api/positions/'+id);
        },
        /*
         * Will send data for position that we want to update
         * */
        updateData:function(id,data){
            return $http.patch(apiURL+'api/positions/'+id,data);
        }
    };
};

