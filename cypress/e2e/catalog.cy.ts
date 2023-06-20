describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://example.cypress.io');
    cy.visit('http://localhost:4200');
  });
});
