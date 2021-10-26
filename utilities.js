exports.createHeaders = function(accessToken){
    var headers = {
        "Stripo-Api-Auth" : accessToken,
    };
    return headers;
}

exports.processAxiosError = function(error){
    if (error.response){
        return(error.response.data);
    } else if (error.request){
        return(error.request);
    } else {
        return(error.message);
    }
}