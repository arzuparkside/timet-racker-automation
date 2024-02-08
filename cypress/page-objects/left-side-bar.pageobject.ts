import { BasePageObject } from "./base.pageobject";

export class LeftSideBar extends BasePageObject{
 private reportItem = () => cy.get('[routerlink="/reports"]')
 private projectsItem = () => cy.get('[routerlink="/projects"')
 private clientsItem = () => cy.get('[routerlink="/clients"')

 public clickReportItem(){
    this.reportItem().click()
 }

 public clickProjectsItem(){
   this.projectsItem().click()
 }

 public clickClientsItem(){
   this.clientsItem().click()
 }
}