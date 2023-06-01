describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Cypress.env('REACT_APP_NEWS_API_KEY')}`, { fixture: 'mockData.json' }).as('getArticles');
    cy.visit(' http://localhost:3000/');
  });

  it('should display a list of articles', () => {
    cy.get('.preview-container').should('have.length', 20);
  });

  it('should navigate to article details on click', () => {
    cy.get('.preview-container').first().click();
    cy.url().should('include', '/article/0');
    cy.get('.article-details').should('be.visible');
  });
});