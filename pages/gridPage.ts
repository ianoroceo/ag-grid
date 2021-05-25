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
  
  /*
  Modified By- Ritdhwaj Singh Chandel
  Date-25/05/21
  */
  public static get primaryColumnHeadrs() {
    return $$('span.ag-header-group-text:not(:empty)');
  }
  public static get secondaryColumnHeadrs() {
    return $$('span.ag-header-cell-text[unselectable]');
  }
  public static get contentInGrid() {
    return $('div[ref=eCheckbox] div input.ag-input-field-input.ag-checkbox-input');
  }
  public static get nameSearchBox() {
    return $('input.ag-floating-filter-input[aria-label='Name Filter Input']');
  }
  
  
  
  
}
