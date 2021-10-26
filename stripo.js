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

exports.getEmail = function(id){
    return new Promise(function(resolve, reject){
        var url = "https://stripo.email/emailgeneration/v1/" + "/emails/" + id;
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