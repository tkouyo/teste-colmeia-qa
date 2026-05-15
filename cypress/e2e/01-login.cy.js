import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

describe('Login', () => {

    const correctUsername = Cypress.env('username');
    const correctPassword = Cypress.env('password');
    const nonExistentUsername = 'nonexistent@test.com';
    const wrongPassword = '??????';

    beforeEach(() => {
        //Arrange
        Login.pageVisit();
    })


    it('Realizar login com usuario e senha corretos', () => { 
        // Act
        Login.submitLogin(correctUsername, correctPassword);

        // Assert
        //TODO REVALIDAR APOS [JIRA-001]
        Dashboard.checkURL();
    })

    it('Realizar login com usuario incorreto', () => {
        // Act
        Login.submitLogin(nonExistentUsername, correctPassword);

        // Assert
        Login.verifyWrongLogin();
    })

    it('Realizar login com senha incorreta', () => {
        // Act
        Login.submitLogin(correctUsername, wrongPassword);

        // Assert
        Login.verifyWrongLogin();
        //Devemos exibir a mensagem nos 2 campos para nao demonstrar que aquele usuario existe para um hacker
    })

    it('Realizar fluxo de Esqueceu sua a senha?', () => {
        
        
        // Assert
        Login.forgotPassword();
    })

})