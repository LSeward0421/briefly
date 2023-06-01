describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Cypress.env('REACT_APP_NEWS_API_KEY')}`, { fixture: 'mockData.json' }).as('getArticles');
    cy.visit(' http://localhost:3000/');
  });

  it('should display a list of articles', () => {
    cy.get('.preview-container').should('have.length', 20);
  });

  it('should allow the user to search for articles', () => {
    const query = 'Bitcoin';
    cy.intercept('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${Cypress.env('REACT_APP_NEWS_API_KEY')}`, { fixture: 'searchResults.json' }).as('getSearchResults');
    cy.get('[placeholder="Search for articles.."]').type(query);
    cy.get('.submit-search-btn').click();
    cy.get('.preview-container').should('have.length.at.least', 1);
  });

  it('should navigate to article details on click', () => {
    cy.get('.preview-container').first().click();
    cy.url().should('include', '/article/0');
    cy.get('.article-details').should('be.visible');
  });

  it('should navigate back to the details list page by clicking the logo', () => {
    cy.get('.preview-container').first().click(); 
    cy.get('.article-details').should('be.visible');
  
    cy.get('.header-title').click();
    cy.url().should('not.include', '/article/0');
    cy.get('.preview-container').should('have.length.at.least', 1);
  });
  
  it('should display an error message when the API returns a 500 error', () => {
    cy.intercept(
      { method: 'GET', url: '**/v2/*' },
      { statusCode: 500 }
    ).as('getArticlesError');

    cy.visit('http://localhost:3000/');
    cy.get('.error-msg').should('be.visible');
  });
  
});