module.exports = function ($http) {

    return {
        /*
        * Will get all data from api
        * */
        getAll: function () {
            return $http.get(apiURL+'api/jobs');
        },
        /*
        * Will get single (by id) result from api
        * */
        getOne: function (id) {
            return $http.get(apiURL+'api/jobs/'+id);
        },
        /*
        * Will send data to api
        * */
        postData: function (data) {
            return $http.post(apiURL+'api/jobs',data);
        },
        /*
        * Will send id of job that we want to delete
        * */
        deleteData: function (id) {
            return $http.delete(apiURL+'api/jobs/'+id);
        },
        /*
        * Will send data for job that we want to update
        * */
        updateData:function(id,data){
            return $http.patch(apiURL+'api/jobs/'+id,data);
        }
    };
};

