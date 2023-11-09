/// <reference types="cypress" />

// Update an existing task
// test with 3 browsers

const browsers_update = ['electron', 'firefox', '!chrome'];

browsers_update.forEach((browser) => {
  describe(`Update an existing todo on ${browser}`, () => {
    it('should update an existing todo', () => {
      // Update an existing task with ID 654cbce0632b080accc4ade8
      cy.request('PUT', 'http://localhost:3000/todos/654cbce0632b080accc4ade8', { "title": "Sleep", "completed": true })
        .its('status')
        .should('eq', 200);
    });
  });
});