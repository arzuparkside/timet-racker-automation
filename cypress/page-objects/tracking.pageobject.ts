import { BasePageObject } from "./base.pageobject";

export class TrackingPageObject extends BasePageObject{
    private descriptionTextBox = () => cy.get('textarea[formcontrolname=description]');
    private projectDropDown = () => cy.get('[labelvalue="clientProjects"] [role="combobox"]')
    private projectList = () => cy.get('[role="option"]')
    private servicesDropDown = () => cy.get('[label="Services"] [role=combobox]')
    private serviceList = () => cy.get('[role="option"]')
    private hoursBox = () => cy.get('[formcontrolname=minutesFormatted]')
    private submitButton = () => cy.get('button[type=submit].add-btn')

    private inputItem = () => cy.get('.mat-row:nth-child(2) *[role=cell]:not([class*=mat-column-actions])')

    public typeDescription(description: string) {
        this.descriptionTextBox().type(description);
    }

    public chooseProject(projectName: string){
        this.projectDropDown().click()
        this.projectList().contains(projectName).click()
    }

    public chooseService(service: string){
        this.servicesDropDown().click()
        this.serviceList().contains(service).click()
    }

    public fillHoursTextBox(hours: string){
        this.hoursBox().clear().type(hours)
    }

    public submit(){
        this.submitButton().click() 
    }

    public checkInput(inputValues: string[]){
        this.inputItem().then(firstRowColumns => {
            return Cypress.$.makeArray(firstRowColumns).map(column => column.textContent);
          }).then(columnTexts => {
            expect(columnTexts).to.deep.equal(inputValues)
          })
    }
}