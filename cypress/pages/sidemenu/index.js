import { elements as el } from "./elements";

class SideMenu {
    //caso tivessemos mais itens poderiamos abstrair e passar o endereco por parametro
    accessCampain(){
        cy.get(el.campaignLogo).click();
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
}

export default new SideMenu();