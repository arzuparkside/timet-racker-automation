import { BasePageObject } from "./base.pageobject";

export class SearchFilterTablePageObject extends BasePageObject{
    private searchTextBox = () => cy.get('.mat-input-element');
    private filterDropdown = () => cy.get('.justify-between .mat-select-value .mat-select-min-line');
    private filterDropdownOptions = () => cy.get('[role="listbox"]');
    private nameColumnItems = () => cy.get('.mat-cell.mat-column-name');

    public checkSearchTextBox() {
        this.searchTextBox().should('be.visible')
    }

    public fillSearchTextBox(text: string){
        this.searchTextBox().type(text)
    }

    public chooseFilter(option: string){
        this.filterDropdown().click();
        this.filterDropdownOptions().contains(option).click();
    }

    public checkNameColumnItemsTexts(expectedTexts: string[]){
        this.nameColumnItems().should('have.length', expectedTexts.length).each((element,index) => {cy.wrap(element).should('have.text',expectedTexts[index])})
    }
}