// Setup chai as promised for easy promise testing
const chai = require('chai');

global.should = chai.should();
global.expect = chai.expect;

global.sinon  = require('sinon');
global.mockAWS = require('aws-sdk-mock');
