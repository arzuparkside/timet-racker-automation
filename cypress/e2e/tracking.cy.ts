describe('Tracking page', () => {
  it('should add a time entry', () => {
    cy.visit('/');
    cy.get('#username').type('');
    cy.get('#password').type('');
    cy.get('#kc-login').click();

    cy.reload();
    
    cy.wait(120000);

    const date = new Date().toISOString();

    cy.get('textarea[formcontrolname=description]').type(`Test Automation Time Entry - ${date}`);

    cy.get('[formcontrolname=projectId] [role=combobox]').click();

    cy.get('[role=option]').contains('Time Tracker Testing').click();

    cy.get('[formcontrolname=serviceId] [role=combobox]').click();

    cy.get('[role=option]').contains('Quality Assurance').click();

    cy.get('[formcontrolname=minutesFormatted]').type('8:00');

    cy.get('button[type=submit].add-btn').click();
  })
});