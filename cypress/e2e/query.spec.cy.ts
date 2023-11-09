/// <reference types="cypress" />

// Query a page
// test with 3 browsers

const browsers_query = ['electron', 'firefox', '!chrome'];

browsers_query.forEach((browser) => {
  describe(`display "todos" page on ${browser}`, () => {
    it('should request "todos" page', () => {
      // Query an existing task with title '/todos'
      cy.request('GET','http://localhost:3000/todos')
      .its('status')
      .should('eq', 200);;
    });
  });
});

