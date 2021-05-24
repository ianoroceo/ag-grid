import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
  });

  it("Should display the column side tool panel", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * verify the side tool bar opened or not
     */    
    expect(GridPage.columnToolPanel.isDisplayed()).to.eql(true);
    expect(GridPage.filerToolPanel.isDisplayed()).to.eql(false);
    
  });

  it("Should filter the main gird while enter value in filter panel", () => {
    GridPage.mainGrid.waitForDisplayed();
    GridPage.filerToolPanel.click();
    GridPage.filterColumnArea.click();
    GridPage.filterText.setValue("tony");
    expect(GridPage.girdFilterText.getAttribute('aria-label')).to.eql("Name Filter Input");    
  });

  it('should switch to another window', () => {
    GridPage.takeVideo.click();
    
    browser.pause(3000);
    browser.switchWindow('https://www.youtube.com/watch?v=29ja0liMuv4')
    // switch back via title match
    browser.switchWindow('AG Grid: Demo of high performance datagrid')

    //can verify whether video is playing or not
});

it('should navigate to docmentation and verify context', () => {
  //navigate via header
});

});
