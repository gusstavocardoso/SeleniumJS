const { getDriver, quitDriver } = require('../utils/driver');
const LoginPage = require('../pages/LoginPage');
const { expect } = require('chai');
const { configDotenv } = require("dotenv");

configDotenv();

const username = process.env.USER_NAME;
const password = process.env.PASSWORD;

describe('Login Tests', function () {
  this.timeout(30000);

  let driver;
  let loginPage;

  before(async () => {
    driver = getDriver();
    loginPage = new LoginPage(driver);
  });

  after(async () => {
    await quitDriver();
  });

  it('deve fazer login com sucesso', async () => {
    await loginPage.navigateTo();
    await loginPage.loginAs(username, password);

    await loginPage.messageLogin().then((message) => {
      expect(message).to.equal('Login bem-sucedido!');
    });

    /* const message = await loginPage.messageLogin();
    expect(message).to.equal('Login bem-sucedido!'); */
  });
});
