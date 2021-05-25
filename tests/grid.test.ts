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
  
  /*
  @ModifiedBy:Rd
  @ModifiedDate:25/05/2021
  */
  it("Verify Primary Grid display names are correct", () => {
    var count=0;
    var primaryHeaders=new Array("Monthly Breakdown", "Performance", "Game of choice", "Participants");
    GridPage.primaryColumnHeadrs.forEach((el) => {
      expect(el.getText().to.equal(primaryHeaders[count]))
      count++;
    });
  });
  
  it("Verify Primary Headers are available in Side Grid", () => {
    var count=0;
    var primaryHeaders=new Array("Monthly Breakdown", "Performance", "Game of choice", "Participants");
    for (var i=0;i<primaryHeaders.length;i++){
      var ele= $'//*[@class='ag-column-select-column-label'][(text()='+primaryHeaders[i]+')]';
      expect(ele.isDisplayed()).to.eql(true);
    }
  });
  
  it("Get Secondary column header and validate the value in side view", () => {
    GridPage.secondaryColumnHeadrs.forEach((el) => {
      var secondarycolumnvalue=el.getText();
      var ele= $'//*[@class='ag-column-select-column-label'][(text()='+secondarycolumnvalue+')]';
      expect(ele.isDisplayed()).to.eql(true);
    });
  });
  
  it("Validate Grid shows result", () => {
    var valueToSearch=new Array("Gil","Tony","Isabella","Poppy");
    for (var i=0;i<valueToSearch.length;i++){
      GridPage.nameSearchBox.click().set(valueToSearch[i])
      expect(GridPage.contentInGrid.isDisplayed()).to.eql(true);
      GridPage.nameSearchBox.clear()
    }
  });
  
});
