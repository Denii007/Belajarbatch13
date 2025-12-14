describe('Register Page', () => {

    it('should load the login page', () => {
        cy.visit('/login');
        cy.contains('Login to Your Account').should('be.visible');
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
    }); 

});
