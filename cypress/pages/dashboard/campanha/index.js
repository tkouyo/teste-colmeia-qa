import { elements as el } from "./elements";

class Campaign {
    verifyURL(){
        cy.url().should('eq', el.url);
    }
    verifyMenuItems(){
        cy.get(el.menuItems).each(($link) => {
            const href = $link.prop('href');
            cy.request({
                url: href,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    }
    accessItem(menuItem){
        cy.get(`a[href="/dashboard/campanha/${menuItem}"]`).click();
    }
}

export default new Campaign();