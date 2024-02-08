export class BasePageObject {
    private header = () => cy.get('h5.header')

    public checkHeader(headerText: string){
        this.header().should('have.text',headerText)
    }
}