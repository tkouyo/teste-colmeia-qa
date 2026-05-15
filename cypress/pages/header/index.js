import { elements as el } from "./elements";

class Header {
    verifyUserName(name){
        cy.get(el.userMenu).should('be.visible').and('contain.text', name);
    }
    activateUserMenu(){
        cy.get(el.userMenu).click();
    }
    verifyElementsUserMenu(){
        //TODO CORRIGIR VERIFICACAO DE ITENS DE MENU IMPLEMENTAR APOS [JIRA-003] E REMOVER ERRO FORCADO
        cy.get(el.userMenu).should('not.be.visible');
    }
}

export default new Header();