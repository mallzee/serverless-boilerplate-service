'use strict';

/* eslint import/no-extraneous-dependencies:0 */
const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

const serviceName = 'serverless-boilerplate';

// Your first function handler
module.exports.hello = (event, context, cb) => {

  // Get the stage out of the function name... for now.
  const stage = context.functionName.replace(`${serviceName}-`, '').split('-')[0];

  const params = {
    TableName: `${stage}-serverless-boilerplate`,
    Item: {
      message: 'Go Serverless v1.0! Your function executed successfully!'
    }
  };

  return dynamo.put(params, cb);

};

// You can add more handlers here, and reference them in serverless.yaml
