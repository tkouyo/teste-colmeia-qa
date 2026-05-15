import Login from '../pages/login';
import SideMenu from '../pages/sidemenu';
import Campaign from '../pages/dashboard/campanha'
import ColmeiaForms from '../pages/dashboard/campanha/colmeia-forms'

describe('Colmeia Forms', () => {

    const colmeiaFormsUrl = 'colmeia-forms';
    beforeEach(() => {
        //Arrange
        // Login.pageVisit();
        // Login.submitLogin(correctUsername, correctPassword);
        //TODO ALTERAR APOS [JIRA-002]
        Login.forceLogin();
        SideMenu.accessCampain();
        Campaign.accessItem(colmeiaFormsUrl);
    })

    it('Acessar pagina Colmeia Forms', () => {
        
        // Assert
        ColmeiaForms.verifyURL();
    })

    it('Verifica carregamento das informacoes', () => {
        // Assert
        ColmeiaForms.verifyContent(); 
    })
})