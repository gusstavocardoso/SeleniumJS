const { configDotenv } = require("dotenv");

configDotenv();

const baseUrl = process.env.BASE_URL

class LoginPage {
    constructor(driver) {
      this.driver = driver;
      this.usernameInput = { id: 'username' };
      this.passwordInput = { id: 'password' };
      this.loginButton = { xpath: "//button[normalize-space()='Entrar']" };
      this.loginMessage = { id: 'loginMessage' };
    }
  
    async navigateTo() {
      await this.driver.get(baseUrl);
    }
  
    async enterUsername(username) {
      await this.driver.findElement(this.usernameInput).sendKeys(username);
    }
  
    async enterPassword(password) {
      await this.driver.findElement(this.passwordInput).sendKeys(password);
    }
  
    async clickLogin() {
      await this.driver.findElement(this.loginButton).click();
    }

    async messageLogin() {
      const message = await this.driver.findElement(this.loginMessage).getText();
      return message;
    }
  
    async loginAs(username, password) {
      await this.enterUsername(username);
      await this.enterPassword(password);
      await this.clickLogin();
    }
  }
  
  module.exports = LoginPage;
  