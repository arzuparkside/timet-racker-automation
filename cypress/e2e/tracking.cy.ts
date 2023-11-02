describe('Tracking page', () => {
  it('should add a time entry', () => {
    cy.visit('/');
    cy.get('#username').type('');
    cy.get('#password').type('');
    cy.get('#kc-login').click();

    // const date = new Date().toISOString();

    const description = `Test Automation Time Entry`;

    cy.get('textarea[formcontrolname=description]').type(description);

    cy.get('[formcontrolname=projectId] [role=combobox]').click();

    cy.get('[role=option]').contains('Minion').click();

    cy.get('[formcontrolname=serviceId] [role=combobox]').click();

    cy.get('[role=option]').contains('Quality Assurance').click();

    cy.get('[formcontrolname=minutesFormatted]').clear().type('8:00');

    cy.get('button[type=submit].add-btn').click();

    cy.get('.mat-row:nth-child(2) *[role=cell]:not([class*=mat-column-actions])').then(firstRowColumns => {
      return Cypress.$.makeArray(firstRowColumns).map(column => column.textContent);
    }).then(columnTexts => {
      expect(columnTexts).to.deep.equal([description, ' Minion  D&D ' , 'Quality Assurance', ' 08:00 '])
    })
  })
});