/// <reference types="cypress" />

// Delete a task
// test with 3 browsers

const browsers_delete = ['electron', 'firefox', '!chrome'];

browsers_delete.forEach((browser) => {
  describe(`Delete a todo on ${browser}`, () => {
    it('should delete a todo', () => {
      // Delete an existing task with ID 654cb67f632b080accc4add6
      cy.request('DELETE', 'http://localhost:3000/todos/654cb67f632b080accc4add6')
        .its('status')
        .should('eq', 200);
    });
  });
});