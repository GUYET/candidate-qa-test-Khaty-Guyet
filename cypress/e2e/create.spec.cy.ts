/// <reference types="cypress" />

// Create a new task
// test with 3 browsers

const browsers_create = ['electron', 'firefox', '!chrome'];

browsers_create.forEach((browser) => {
  describe(`Create a new todo on ${browser}`, () => {
    it('should create a new todo', () => {
      // Create a new task with title 'Tâche 21'
      cy.request('POST', 'http://localhost:3000/todos', { title: 'Tâche 21' })
        .its('status')
        .should('eq', 201);
    });
  });
});
