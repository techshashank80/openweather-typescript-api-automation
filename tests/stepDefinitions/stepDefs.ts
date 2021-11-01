import { When, Then } from '@cucumber/cucumber';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { expect } from 'chai';
import * as consts from '../../framework/const.json';

chai.use(chaiHttp);

let response;

When(/^I call GET on "([^"]*)"$/, async function (pathParam: string) {
  response = await  chai.request(consts.baseUrl).get(pathParam+consts.appKey);
  console.log(response);
})
Then(/^I expect status code as "([^"]*)"$/, async function (statusCode: string) {
  expect(response.statusCode).to.equal(parseInt(statusCode));
})
Then(/^I verify the response to be "([^"]*)"$/, async function (responseString: string) {
  expect(response.body.name).to.equal(responseString);
})
Then(/^I verify the lat attrbute response to be "([^"]*)"$/, async function (responseString: string) {
  expect(response.body.coord.lat).to.equal(parseFloat(responseString));
})
Then(/^I verify the lon attrbute response to be "([^"]*)"$/, async function (responseString: string) {
  expect(response.body.coord.lon).to.equal(parseFloat(responseString));
})




