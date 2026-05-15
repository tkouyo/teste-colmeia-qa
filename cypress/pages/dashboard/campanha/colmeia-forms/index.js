import { elements as el } from "./elements";

class ColmeiaForms {
    verifyURL(){
        cy.url().should('eq', el.url);
    }
    verifyContent(){
        cy.contains('h2', el.title).should('be.visible');
    }
}

export default new ColmeiaForms();