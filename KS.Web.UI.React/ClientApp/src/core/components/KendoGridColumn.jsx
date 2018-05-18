import React from 'react';
import { GridColumn as Column } from '@progress/kendo-react-grid';


export class KendoGridColumn extends React.Component {
    
    buildColumnList() {
        this.props.Columns
        return <Column field="IssueName" title="IssueName" />;
    }
    render() {
        return (
            this.buildColumnList()
        );
    }
}