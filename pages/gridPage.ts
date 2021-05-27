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

  public static get PrimaryColumnHeader() {
    return $$('div.ag-header-group-cell-label span');
  }

  public static get PrimaryColumn() {
    return $$('d.ag-header-row-column-group');
  }
  
  public static get Pivot() {
    return $$('.ag-pivot-mode-select');
  }
  public static get pivotPanelContainer() {
    return $$('span.ag-virtual-list-container');
  }

  public static get secondaryPanel() {
    return $$('span.ag-header-cell-text[unselectable]');
  }

  public static get secondarySidePanelValue() {
    return $$('.div.ag-column-select-virtual-list-item');
  }
  
};
