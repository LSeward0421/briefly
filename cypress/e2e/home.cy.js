describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/', { fixture: 'mockData.json' }).as('getArticles');
    cy.visit('/');
    cy.wait('@getArticles');
  });

  it('should display a list of articles', () => {
    cy.get('.preview-container').should('have.length', 6);
  });

  it('should navigate to article details on click', () => {
    cy.get('.preview-container').first().click();
    cy.url().should('include', '/article/0');
    cy.get('.article-details').should('be.visible');
  });

  it('should display an error message when the API call fails', () => {
    cy.intercept('GET', 'https://newsapi.org/**', { statusCode: 500, body: 'Internal Server Error' }).as('getArticles');
    cy.visit('/');
    cy.wait('@getArticles');
    cy.get('.error-msg').should('contain', 'Uh-oh! Something went wrong. Please refresh the page.');
  });

  it('should clear search and date filters on clear button click', () => {
    cy.get('input[type="text"]').type('keyword');
    cy.get('button[type="submit"]').click();
    cy.get('.clear-search-btn').click();
    cy.get('input[type="text"]').should('have.value', '');
    cy.get('.react-datepicker__input-container input').eq(0).should('have.value', '');
    cy.get('.react-datepicker__input-container input').eq(1).should('have.value', '');
  });
});