import { elements as el } from "./elements";

class BancosDeDados {
    verifyURL(){
        cy.url().should('eq', el.url);
    }
    verifyContent(){
        cy.contains('h2', el.title).should('be.visible');
    }
    createItem(nameItem){
        cy.contains('button', el.createButton).click();
        cy.contains('div', el.createPopup).should('be.visible');
        cy.get(el.createPlaceholder).type(nameItem);
        cy.contains('button', el.createConfirm).click();
    }
    verifyBaseItem(nameItem){
        cy.contains('td', nameItem).should('be.visible');
    }
    verifyBaseItemDuplicaded(nameItem){
        cy.get('table td').filter(`:contains("${nameItem}")`).should('have.length', 1);
    }
    archiveItem(nameItem){
        cy.contains('tr', nameItem).find(el.buttonArchive).click();
    }
    verifyArchivedItem(nameItem){
        cy.contains('td', nameItem).should('not.exist');
        this.archivedItems
        cy.contains('td', nameItem).should('be.visible');
    }
    deleteItem(nameItem){
        cy.contains('tr', nameItem).find(el.buttonDelete).click();
    }
    verifyDeletedItem(nameItem){
        cy.contains('td', nameItem).should('not.exist');
    }
    searchItem(nameItem){
        cy.get(el.searchPlaceholder).type(nameItem);
    }
    verifyUnfoundedItem(nameItem){
        cy.contains('td', `Nenhum resultado encontrado para "${nameItem}"`).should('be.visible');
    }
    archivedItems(){
        cy.get(el.buttonArchivedItems).click();
    }
    verifyTableStructure(){
        cy.get('tbody tr').each(($tr) => {
          cy.wrap($tr).find('td').should('have.length', 3);
        });
    }
    verifyNoItemsMessage(){
        cy.contains('td', 'Nenhum banco de dados encontrado').should('be.visible');
    }
    verifyArchivedDuplicatedItem(nameItem){
        cy.get('table td').filter(`:contains("${nameItem}")`).should('have.length', 0);
        this.archivedItems();
        this.verifyBaseItemDuplicaded(nameItem);
    }
}

export default new BancosDeDados();