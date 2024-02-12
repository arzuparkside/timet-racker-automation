import { ClientPageObject } from "../page-objects/clients.pageobject";
import { LeftSideBar } from "../page-objects/left-side-bar.pageobject";
import { LoginPageObject } from "../page-objects/login.pageobject";
import { ProjectsPageObject } from "../page-objects/projects.pageobject";
import { ReportPageObject } from "../page-objects/report.pageobject";
import { TrackingPageObject } from "../page-objects/tracking.pageobject";

describe('Tracking page', () => {
  const loginPage = new LoginPageObject();
  const leftSideBar = new LeftSideBar();
  const reportPage = new ReportPageObject();
  const projectsPage = new ProjectsPageObject();
  const clientsPage = new ClientPageObject();

  beforeEach(()=>{
    loginPage.visit();
    loginPage.typeUsername();
    loginPage.typePassword();
    loginPage.clickSignIn();
  })

  it('should add a time entry', () => {
    const trackingPage = new TrackingPageObject(); 
    const description = `A-Test Automation Time Entry`;
    const projectName = 'Minion';
    const service = 'Quality Assurance';
    const hours = ' 08:00 ';
    const inputValues = [description, ' Minion  D&D ' , service, hours]

    trackingPage.typeDescription(description)
    trackingPage.chooseProject(projectName);
    trackingPage.chooseService(service);
    trackingPage.fillHoursTextBox(hours);
    trackingPage.submit();
    trackingPage.checkInput(inputValues); 
   })

  it('should check content of Reports page', () => { 
    leftSideBar.clickReportItem();
    reportPage.checkHeader('Reports');
  });

  it('should check that Filter/Group button opens a form', () => {   
    leftSideBar.clickReportItem();
    reportPage.clickFilterButton();
    reportPage.checkFilterContainer(); 
  });

  it('should search for sth', () => {
    leftSideBar.clickProjectsItem();
    projectsPage.checkHeader('Projects');
    projectsPage.checkSearchTextBox();
    projectsPage.fillSearchTextBox('Minion');
});

  it('should search for a client', () => {
    leftSideBar.clickClientsItem();
    clientsPage.checkHeader('Clients');
    clientsPage.checkSearchTextBox();
    clientsPage.fillSearchTextBox('Parkside');
    clientsPage.checkNameColumnItemsTexts(['Parkside']);
 });

  it('should check the list  of active clients', () => {
    leftSideBar.clickClientsItem();
    clientsPage.checkHeader('Clients');
    clientsPage.chooseFilter('Active');
    clientsPage.chooseFilter('Archived');
    clientsPage.checkNameColumnItemsTexts(['D&D', 'test archived client', 'CustomBack', 'claudias client 123', 'sdf', 'TestPc', 'paulo test client', 'Test Currency Client', 'Lisa Client Nr. 1']);
  })

  it('should check the list  of active projects', () => {    
    leftSideBar.clickProjectsItem();
    projectsPage.checkHeader('Projects');
    projectsPage.chooseFilter('Active');
    projectsPage.chooseFilter('Archived');
    cy.wait(10000);
    projectsPage.checkNameColumnItemsTexts(['Branding', 'Marketing', 'TV Plataform', 'Feature - Testing', 'MobileApp', 'Test4Dev Software', 'Test4QA', '3DPrinter', 'TestX', 'Claudias project 1'])
  })

  it('should check attributes of each element in project page', () => {
    leftSideBar.clickProjectsItem();
    projectsPage.checkHeader('Projects');
    projectsPage.chooseFilter('Active');
    projectsPage.chooseFilter('Archived');
    cy.wait(1000);
    projectsPage.checkAttributeColumnItems(10, 'role', 'cell')
  })
})