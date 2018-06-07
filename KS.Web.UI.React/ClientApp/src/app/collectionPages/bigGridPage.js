import React, { Component } from 'react'; 
import { KendoGrid as WdsGrid } from '../../core/components/kendoGrids/KendoGrid';

export class BigGridPage extends Component { 
  render() { 
    return (
      <div>
        <WdsGrid widgetDataSourceId='21b89eae-e838-e811-8209-2c56dc964f5f' />
        {/* <br/>
        <WdsGrid widgetDataSourceId='A82309C7-F90E-E711-88FF-001C427D3E89' />
        <br/>
        <WdsGrid widgetDataSourceId='9CDBE3A9-AA0A-E811-8204-0A15530FEAC2' />
        <br/>
        <WdsGrid widgetDataSourceId='21b89eae-e838-e811-8209-2c56dc964f5f' />
        <br/>
        <WdsGrid widgetDataSourceId='21b89eae-e838-e811-8209-2c56dc964f5f' />         */}
      </div>
    );
  }
}