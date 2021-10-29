describe('Testing tic-tac-toe', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html');
    });
    it('Can click a tile multiple times without overriding the previous move', () => {
        cy.get('#top-left-tile').click();
        cy.get('#top-left-tile').should('have.text', 'X');

        cy.get('#top-left-tile').click();
        cy.get('#top-left-tile').should('have.text', 'X');

        cy.reload();
    });
    it('Can win with a diagonal cross', () => {
        cy.get('#top-left-tile').click();
        cy.get('#top-center-tile').click();
        cy.get('#middle-center-tile').click();
        cy.get('#top-right-tile').click();
        cy.get('#bottom-right-tile').click();

        cy.get('.alert-header').should('have.text', 'Crosses have won!');

        cy.reload();
    });
    it('Can win with inverse diagonal noughts', () => {
        cy.get('#top-left-tile').click();
        cy.get('#top-right-tile').click();
        cy.get('#top-center-tile').click();
        cy.get('#middle-center-tile').click();
        cy.get('#middle-left-tile').click();
        cy.get('#bottom-left-tile').click();

        cy.get('.alert-header').should('have.text', 'Noughts have won!');

        cy.reload();
    });
    it('Knows when the game is a draw', () => {
        cy.get('#top-left-tile').click();
        cy.get('#top-center-tile').click();
        cy.get('#top-right-tile').click();
        cy.get('#middle-center-tile').click();
        cy.get('#middle-right-tile').click();
        cy.get('#middle-left-tile').click();
        cy.get('#bottom-center-tile').click();
        cy.get('#bottom-right-tile').click();
        cy.get('#bottom-left-tile').click();

        cy.get('.alert-header').should('have.text', 'Draw.');

        cy.reload();
    });
    it('Can win top row with crosses', () => {
        cy.get('#top-left-tile').click();
        cy.get('#bottom-center-tile').click();
        cy.get('#top-right-tile').click();
        cy.get('#middle-left-tile').click();
        cy.get('#top-center-tile').click();

        cy.get('.alert-header').should('have.text', 'Crosses have won!');

        cy.reload();
    });
    it('Can win left column with noughts', () => {
        cy.get('#top-center-tile').click();
        cy.get('#top-left-tile').click();
        cy.get('#top-right-tile').click();
        cy.get('#middle-left-tile').click();
        cy.get('#middle-center-tile').click();
        cy.get('#bottom-left-tile').click();

        cy.get('.alert-header').should('have.text', 'Noughts have won!');

        cy.reload();
    });
    it('Can dismiss the pop-up when the game is finished and empty the game board of previous moves', () => {
        cy.get('#top-center-tile').click();
        cy.get('#top-left-tile').click();
        cy.get('#top-right-tile').click();
        cy.get('#middle-left-tile').click();
        cy.get('#middle-center-tile').click();
        cy.get('#bottom-left-tile').click();

        cy.get('.alert-header').should('have.text', 'Noughts have won!');
        cy.get('.alert-wrapper').click();

        cy.get('.alert-wrapper').should('not.be.visible');
        cy.get('.tile').each(($el) => {
            expect($el).to.contain('');
        });

        cy.reload();
    });
    it('Can display whose turn it is', () => {
        cy.get('.turn-header').should('have.text', 'Crosses move');

        cy.get('#top-left-tile').click();

        cy.get('.turn-header').should('have.text', 'Noughts move');

        cy.get('#top-center-tile').click();
        cy.get('#middle-center-tile').click();
        cy.get('#top-right-tile').click();
        cy.get('#bottom-right-tile').click();

        cy.get('.alert-wrapper').click();
        cy.get('.turn-header').should('have.text', 'Crosses move');
    });
});
