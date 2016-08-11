'use strict';

const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

// Your first function handler
module.exports.hello = (event, context, cb) => {

  const params = {
    TableName: 'serverless-boilerplate-table',
    Item: {
      message: 'Go Serverless v1.0! Your function executed successfully!'
    }
  };

  return dynamo.put(params, cb);

};

// You can add more handlers here, and reference them in serverless.yaml
