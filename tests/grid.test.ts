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

  it("Should display Primary column labels", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if Primary column header labels are following.
     * Participant,Game of Choice,Performance,Monthly Breakdown
     */
     GridPage.PrimaryColumn.forEach((ee) => {
      const text = ee.getText();
      expect(text).to.include("Participant,Game of Choice,Performance,Monthly Breakdown")
    });
  });

  it("Should display Primary column labels in side bar", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if Primary column headers are there in sidebar.
     * Participant,Game of Choice,Performance,Monthly Breakdown
     */
     GridPage.pivotPanelContainer.forEach((ee) => {
      ee.scrollIntoView();
      const text = ee.getText();
      expect(text).to.include("Participant,Game of Choice,Performance,Monthly Breakdown")
    });
  });

  it("Should display Secondary column and are also available in side bar", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if Secondary column headers are dispalyed 
     * Check Secondary Panel headers are available in side bar.
     */
     GridPage.secondaryPanel.forEach((ee) => {
      var secondarySidebarValue
      expect(ee.isDisplayed()).to.eql(true);
      const secondarycolumnText=ee.getText();
      //Checking values are also present in side bar
      GridPage.secondarySidePanelValue.forEach ((elem) => {
      expect(elem.isDisplayed()).to.eql(true);
      secondarySidebarValue = elem.getText();
      console.log('secondarySidebarValue', secondarySidebarValue);
      expect (secondarycolumnText).to.equal(secondarySidebarValue);
      });
    });
  });
});
