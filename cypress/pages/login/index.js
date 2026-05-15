import { elements as el } from "./elements";

class Login {
    pageVisit(){
        cy.visit(el.url);
    }
    submitLogin(username,password){
        cy.get(el.username).type(username);
        cy.get(el.password).type(password);
        cy.get(el.loginButton).click();
    }
    forceLogin(){
        cy.visit('/');
        this.submitLogin(Cypress.env('username'), Cypress.env('password'))
        cy.contains('button', el.continueButton).should('be.visible').click();
    }
    verifyWrongLogin(){
        cy.get(el.username).should('contain.text', el.errorMessage).and('be.visible');
        cy.get(el.password).should('contain.text', el.errorMessage).and('be.visible');
        cy.url().should('eq', el.url);
    }
    forgotPassword(){
        cy.contains('a', el.forgotPasswordButton).should('be.visible').click();
        const forgotPasswordUrl = 'forgot-password';
        cy.url().should('include', forgotPasswordUrl);
    }
}

export default new Login();