import { BasePageObject } from "./base.pageobject";

export class LoginPageObject extends BasePageObject {
    private usernameTextBox = () => cy.get('#username');
    private passwordTextBox = () => cy.get('#password');
    private signInButton = () => cy.get('#kc-login');

    public typeUsername() {
        this.usernameTextBox().type('timetrackertestautomation@gmail.com');   
    }

    public typePassword() {
        this.passwordTextBox().type('NLQyrNEWy6pat5');
    }

    public clickSignIn() {
        this.signInButton().click();
    }

    public visit() {
        cy.visit('/');
    }
}