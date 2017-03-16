/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://tnexnmzch3.execute-api.us-east-1.amazonaws.com/dev';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.rootPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var rootPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(rootPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.rootOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var rootOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(rootOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.backlogBacklogItemBacklogIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['backlog_id', 'region'], ['body']);
        
        var backlogBacklogItemBacklogIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/backlog/backlog-item/{backlog_id}').expand(apiGateway.core.utils.parseParametersToObject(params, ['backlog_id', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(backlogBacklogItemBacklogIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.backlogBacklogItemBacklogIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['backlog_id', 'body', 'region'], ['body']);
        
        var backlogBacklogItemBacklogIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/backlog/backlog-item/{backlog_id}').expand(apiGateway.core.utils.parseParametersToObject(params, ['backlog_id', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(backlogBacklogItemBacklogIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.backlogBacklogItemBacklogIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var backlogBacklogItemBacklogIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/backlog/backlog-item/{backlog_id}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(backlogBacklogItemBacklogIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.backlogVinGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['vin', 'units', 'region'], ['body']);
        
        var backlogVinGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/backlog/{vin}').expand(apiGateway.core.utils.parseParametersToObject(params, ['vin', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['units', ]),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(backlogVinGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.backlogVinOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var backlogVinOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/backlog/{vin}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(backlogVinOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.backlogVinTypeGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['type', 'vin', 'region'], ['body']);
        
        var backlogVinTypeGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/backlog/{vin}/{type}').expand(apiGateway.core.utils.parseParametersToObject(params, ['type', 'vin', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(backlogVinTypeGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.backlogVinTypeOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var backlogVinTypeOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/backlog/{vin}/{type}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(backlogVinTypeOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.buttonPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body', 'region'], ['body']);
        
        var buttonPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/button').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(buttonPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.buttonPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body', 'region'], ['body']);
        
        var buttonPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/button').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(buttonPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.buttonOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var buttonOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/button').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(buttonOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tripLogPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body', 'region'], ['body']);
        
        var tripLogPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/trip-log').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tripLogPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tripLogOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tripLogOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/trip-log').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tripLogOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tripLogVinGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['vin', 'region'], ['body']);
        
        var tripLogVinGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/trip-log/{vin}').expand(apiGateway.core.utils.parseParametersToObject(params, ['vin', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tripLogVinGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tripLogVinOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tripLogVinOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/trip-log/{vin}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tripLogVinOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['region'], ['body']);
        
        var userGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/user').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body', 'region'], ['body']);
        
        var userPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/user').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var userOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/user').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userNorautoPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body', 'region'], ['body']);
        
        var userNorautoPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/user/norauto').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userNorautoPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userNorautoOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var userNorautoOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/user/norauto').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userNorautoOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.vehicleGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['region'], ['body']);
        
        var vehicleGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/vehicle').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(vehicleGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.vehicleOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var vehicleOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/vehicle').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(vehicleOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.vehiclePlatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body', 'region'], ['body']);
        
        var vehiclePlatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/vehicle/plate').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(vehiclePlatePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.vehiclePlateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var vehiclePlateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/vehicle/plate').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(vehiclePlateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.vehicleVinGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['vin', 'region'], ['body']);
        
        var vehicleVinGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/vehicle/{vin}').expand(apiGateway.core.utils.parseParametersToObject(params, ['vin', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(vehicleVinGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.vehicleVinPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['vin', 'body', 'region'], ['body']);
        
        var vehicleVinPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/vehicle/{vin}').expand(apiGateway.core.utils.parseParametersToObject(params, ['vin', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(vehicleVinPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.vehicleVinPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['vin', 'region'], ['body']);
        
        var vehicleVinPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/vehicle/{vin}').expand(apiGateway.core.utils.parseParametersToObject(params, ['vin', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['region']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(vehicleVinPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.vehicleVinOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var vehicleVinOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/vehicle/{vin}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(vehicleVinOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
