import { elements as el } from "./elements";

class Dashboard {
    checkURL(){
        cy.url().should('eq', el.url);
    }
    verifyDashboard(titulo){
        //TODO REFAZER TESTE APOS [JIRA-004]
        cy.get(el.sideMenu).siblings().should('contain.text', titulo)
    }
}

export default new Dashboard();