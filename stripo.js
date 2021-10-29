const axios = require('axios');
const utilities = require('./utilities');

exports.getEmails = function(){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/emails";
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getValidate = function(){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/validate";
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getTemplates = function(){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/templates";
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getSRTNames = function(){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/srtnames";
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

// DELETED PER NANCY 10-29-21
//exports.getEmail = function(id){
//    return new Promise(function(resolve, reject){
//        var url = "https://stripo.email/emailgeneration/v1/" + "/emails/" + id;
//        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
//        var options = {
//            url: url,
//            method: 'GET',
//            headers: headers
//        };
//        axios(options).then(function(result){
//            resolve(result.data);
//        }).catch(function(err){
//            reject(utilities.processAxiosError(err));
//        });
//    });
//}

exports.getEmailHTML = function(id){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/export/html/emails/" + id;
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getTemplateHTML = function(id){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/export/html/templates/" + id;
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.createEmail = function(body){
    return new Promise(function(resolve, reject){
        //UPDATED PER NANCY 10-29-21
        var url = "https://stripo.email/emailgeneration/v1/" + "/email";
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'POST',
            headers: headers,
            data: body
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            console.log(err);
            reject(utilities.processAxiosError(err));
        });
    });
}

//DELETED PER NANCY 10-29-21
//exports.getTemplate = function(id){
//    return new Promise(function(resolve, reject){
//        var url = "https://stripo.email/emailgeneration/v1/" + "/templates/" + id;
//        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
//        var options = {
//            url: url,
//            method: 'GET',
//           headers: headers
//        };
//        axios(options).then(function(result){
//            resolve(result.data);
//        }).catch(function(err){
//            reject(utilities.processAxiosError(err));
//        });
//    });
//}

exports.createSRT = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/srt";
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'POST',
            headers: headers,
            data: body
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.deleteEmail = function(id){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/emails/" + id;
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'DELETE',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}

exports.getSRT = function(query){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/srt";
        if (query && query.name){
            url += "?" + "name=" + query.name;
        }
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}


exports.deleteSRT = function(query){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/srt";
        if (query && query.name){
            url += "?" + "name=" + query.name;
        }
        var headers = utilities.createHeaders(process.env.STRIPO_AUTH_TOKEN);
        var options = {
            url: url,
            method: 'DELETE',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}