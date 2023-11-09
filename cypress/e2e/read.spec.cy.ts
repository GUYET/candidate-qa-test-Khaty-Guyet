/// <reference types="cypress" />

// Read a task
// test with 3 browsers

const browsers = ['electron', 'firefox', '!chrome'];

browsers.forEach((browser) => {
  describe(`Check todo details by title on ${browser}`, () => {
    it('should get details of a todo by title', () => {
      // Read an existing task with title 'Tâche 3'
      cy.request('GET','http://localhost:3000/todos?title=Tâche 3')
        .its('status')
        .should('eq', 200);
    });
  });
});