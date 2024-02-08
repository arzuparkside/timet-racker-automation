import { BasePageObject } from "./base.pageobject";

export class ReportPageObject extends BasePageObject{
    private filterButton = () => cy.get('[data-mat-icon-name="filter_list"]')
    private filterContainer = () => cy.get('#filtersContainer')
    
    public clickFilterButton() {
        this.filterButton().click()
    }

    public checkFilterContainer(){
        this.filterContainer().should('be.visible')
    }
}