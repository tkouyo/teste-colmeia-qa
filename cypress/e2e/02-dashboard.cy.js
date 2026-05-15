import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Header from '../pages/header';

describe('Dashboard', () => {

    beforeEach(() => {
        //Arrange
        // Login.pageVisit();
        // Login.submitLogin(correctUsername, correctPassword);
        //TODO ALTERAR APOS [JIRA-002]
        Login.forceLogin();
    })

    it('Acessar pagina de dashboard', () => {
        
        // Assert
        Dashboard.checkURL();

    })

    it('Validar dashboard', () => {
        const dashboardTitle = 'Dashboard';
        // Assert
        //TODO REFAZER TESTE APOS [JIRA-004]
        Dashboard.verifyDashboard(dashboardTitle);
    })

    //O Fluxo de validacao do menu do usuario pode estar apartado, ja que ele se repetiria em diversas paginas
    it('Validar nome do usuario', () => {
        const userName = 'Candidato';
        // Assert
        Header.verifyUserName(userName);
    })


    it('Abrir menu do usuario', () => { 
        // Act
        Header.activateUserMenu();

        // Assert
        Header.verifyElementsUserMenu();
    })
  
})