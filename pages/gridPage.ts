import { Page } from "../pages/page";

export class GridPage {
  public static get mainGrid() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
  }

  public static get sideBar() {
    return $('[ref="eRootWrapper"] .ag-side-bar');
  }

  public static get gridContainer() {
    return $(
      '[ref="eRootWrapper"] > .ag-root-wrapper-body [ref="eCenterContainer"]'
    );
  }

  public static get colName() {
    return $$('[ref="eCenterContainer"] [col-id="name"]');
  }

  public static get colDecember() {
    return $$('[ref="eCenterContainer"] [col-id="dec"]');
  }

  public static get columnHeader() {
    return $$('[aria-rowindex="1"] > [role="columnheader"]');
  }

  public static get columnToolPanel() {
    return $('#myGrid div.ag-side-bar > div:nth-child(2)');
  }

  public static get filerToolPanel() {
    return $('#myGrid div.ag-side-bar > div:nth-child(3)');
  }

  public static get filterColumnArea(){
    return $('//*[@id="myGrid"]//span[@ref="eFilterName"][text()="Name"]');
  }

  public static get filterText(){
    return $('#filterText');
  }

  public static get girdFilterText(){
    return $('input.ag-floating-filter-input');
  }

  public static get takeVideo(){
    return $('div.video-tour > a');
  }
}
