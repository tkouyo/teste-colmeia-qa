import Login from '../pages/login';
import SideMenu from '../pages/sidemenu';
import Campaign from '../pages/dashboard/campanha'

describe('Campanha', () => {

    beforeEach(() => {
        //Arrange
        // Login.pageVisit();
        // Login.submitLogin(correctUsername, correctPassword);
        //TODO ALTERAR APOS [JIRA-002]
        Login.forceLogin();
        SideMenu.accessCampain();
    })

    it('Acessar pagina de campanha', () => {
        
        // Assert
        Campaign.verifyURL();
    })
    it('Validar itens de menu internos', () => {
        
        // Assert
        Campaign.verifyMenuItems();        
    })
})