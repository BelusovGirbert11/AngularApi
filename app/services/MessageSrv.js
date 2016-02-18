module.exports = function ($http) {

    return {
        /*
         * Will get all data from api
         * */
        getAll: function () {
            return $http.get(apiURL+'api/messages');
        },
        /*
         * Will get single (by id) result from api
         * */
        getOne: function (id) {
            return $http.get(apiURL+'api/messages/'+id);
        },
        /*
         * Will send data to api
         * */
        postData: function (data) {
            return $http.post(apiURL+'api/messages',data);
        },
        /*
         * Will send id of message that we want to delete
         * */
        deleteData: function (id) {
            return $http.delete(apiURL+'api/messages/'+id);
        },
        /*
         * Will send data for message that we want to update
         * */
        updateData:function(id,data){
            return $http.patch(apiURL+'api/messages/'+id,data);
        }
    };
};

