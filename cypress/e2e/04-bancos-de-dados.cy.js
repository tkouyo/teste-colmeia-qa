import Login from '../pages/login';
import SideMenu from '../pages/sidemenu';
import Campaign from '../pages/dashboard/campanha'
import BancosDeDados from '../pages/dashboard/campanha/bancos-de-dados'

describe('Bancos de Dados', () => {

    const bancosDeDadosUrl = 'bancos-de-dados';
    beforeEach(() => {
        //Arrange
        // Login.pageVisit();
        // Login.submitLogin(correctUsername, correctPassword);
        //TODO ALTERAR APOS [JIRA-002]
        Login.forceLogin();
        SideMenu.accessCampain();
        Campaign.accessItem(bancosDeDadosUrl);
    })

    it('Acessar pagina Bancos de Dados', () => {
        
        // Assert
        BancosDeDados.verifyURL();
    })

    it('Verifica carregamento das informacoes', () => {
        // Assert
        BancosDeDados.verifyContent(); 
    })

    it('Criar novo item', () => {
        const nameItem = 'Teste';
        // Act
        BancosDeDados.createItem(nameItem);

        // Assert
        BancosDeDados.verifyBaseItem(nameItem);
    })

    //O sistema permite e trata itens com nomes duplicados
    it('Criar itens com nomes duplicados', () => {
        const nameItems = ['Teste 01', 'Teste 02', 'Teste 01'];
        const itemToBeVerified = 0;//ou seja posicao 1 do array
        // Act
        nameItems.forEach((nameItem) => {
            BancosDeDados.createItem(nameItem);
        })

        // Assert
        BancosDeDados.verifyBaseItemDuplicaded(nameItems[itemToBeVerified]);
    })

    it('Arquivar item', () => {
        const nameItem = 'Teste';
        // Act
        BancosDeDados.createItem(nameItem);
        BancosDeDados.archiveItem(nameItem);

        // Assert
        //TODO REVALIDAR APOS [JIRA-00x]
        BancosDeDados.verifyArchivedItem(nameItem);
    })

    it('Apagar item', () => {
        const nameItems = ['Teste 01', 'Teste 02', 'Teste 03'];
        const itemToBeDeleted = 1;//ou seja posicao 2 do array
        // Act
        nameItems.forEach((nameItem) => {
            BancosDeDados.createItem(nameItem);
        })
        BancosDeDados.deleteItem(nameItems[itemToBeDeleted]);

        // Assert
        BancosDeDados.verifyDeletedItem(nameItems[itemToBeDeleted]);
    })

    it('Arquivar itens com nomes duplicados', () => {
        const nameItems = ['Teste 01', 'Teste 02', 'Teste 01'];
        const itemToBeArchived = 0;//ou seja posicao 1 do array
        // Act
        nameItems.forEach((nameItem) => {
            BancosDeDados.createItem(nameItem);
        })
        BancosDeDados.archiveItem(nameItems[itemToBeArchived]);

        // Assert
        //TODO REVALIDAR APOS [JIRA-00x]
        BancosDeDados.verifyArchivedDuplicatedItem(nameItems[itemToBeArchived]);
    })

    it('Apagar itens com nomes duplicados', () => {
        const nameItems = ['Teste 01', 'Teste 02', 'Teste 01'];
        const itemToBeDeleted = 0;//ou seja posicao 1 do array
        // Act
        nameItems.forEach((nameItem) => {
            BancosDeDados.createItem(nameItem);
        })
        BancosDeDados.deleteItem(nameItems[itemToBeDeleted]);
        
        // Assert
        BancosDeDados.verifyDeletedItem(nameItems[itemToBeDeleted]);
    })

    it('Pesquisar item existente', () => {
        const nameItems = ['Teste 01', 'Teste 02', 'Teste 03'];
        const searchedItem = 2;//ou seja posicao 3 do array
        // Act
        nameItems.forEach((nameItem) => {
            BancosDeDados.createItem(nameItem);
        })
        BancosDeDados.searchItem(nameItems[searchedItem]);

        // Assert
        BancosDeDados.verifyBaseItem(nameItems[searchedItem]);
    })

    it('Pesquisar item nao existente', () => {
        const nameItems = ['Teste 01', 'Teste 02', 'Teste 03'];
        const nonExistentItem = 'Teste XPTO';
        // Act
        nameItems.forEach((nameItem) => {
            BancosDeDados.createItem(nameItem);
        })
        BancosDeDados.searchItem(nonExistentItem);

        // Assert
        BancosDeDados.verifyUnfoundedItem(nonExistentItem);
    })

    it('Validar estrutura da tabela de itens', () => {
        const nameItem = 'Teste';
        // Act
        BancosDeDados.createItem(nameItem);

        // Assert
        BancosDeDados.verifyTableStructure();
    })

    it('Validar estrutura da tabela de itens arquivados', () => {
        const nameItem = 'Teste';
        // Act
        BancosDeDados.createItem(nameItem);
        BancosDeDados.archivedItems();

        // Assert
        BancosDeDados.verifyTableStructure();
    })

    it('Validar mensagem avisando que nenhum banco foi encontrado na tabela', () => {
        // Assert
        BancosDeDados.verifyNoItemsMessage();

    })

    it('Validar mensagem avisando que nenhum banco foi encontrado na tabela de itens arquivados', () => {
        // Act
        BancosDeDados.archivedItems();

        // Assert
        BancosDeDados.verifyNoItemsMessage();
    })


})