import React from 'react';
import '../../content/styles/all.css';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { WidgetDataSourceLoader } from '../utilities/widget-data-source-loader';
import fetchBreezeData from '../utilities/fetchBreezeData';

export class KendoGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: { data: [], total: 0 },
            dataState: { take: 10, skip: 0 },
            columnList: []
        };

    }
    WidgetDataSourceId = this.props.widgetDataSourceId
    dataStateChange = (e) => {
        this.setState({
            ...this.state,
            dataState: e.data
        });
    }

    dataReceived = (products) => {
        this.setState({
            ...this.state,
            products: products
        });
    }

    createColumn(key) {
        if (key.ColumnWidth > 0) {
            return <Column key={key.Id} field={key.FieldName} title={key.Title} width={key.ColumnWidth} />;
        }
        return <Column key={key.Id} field={key.FieldName} title={key.Title} />;
      }
    
    createColumns(columns) { 
        return columns.map(this.createColumn);
        
    }
    getColumns() {
        return fetchBreezeData('WidgetDataSourceFields', this.props.widgetDataSourceId,"WidgetDataSourceId").then(
            response => { 
                if (response && response.length > 0) {
                    this.setState({
                        ...this.state,
                        columnList: response
                    });
                }
            }
        );
    }
    
    static displayGrid() { 
            return (
                <div>
                    <Grid
                        filterable={true}
                        sortable={true}
                        pageable={true}
                        {...this.state.dataState}
                        {...this.state.products}
                        onDataStateChange={this.dataStateChange}
                    >
                        {this.createColumns(this.state.columnList)}
                    </Grid>

                    <WidgetDataSourceLoader
                        dataState={this.state.dataState}
                        onDataReceived={this.dataReceived}
                        dataSourceId={this.WidgetDataSourceId}
                    />
                </div>
        );
        
    }

    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.getColumns();
        
        
        
            return (
                <div>
                    <Grid
                        filterable={true}
                        sortable={true}
                        pageable={true}
                        {...this.state.dataState}
                        {...this.state.products}
                        onDataStateChange={this.dataStateChange}
                    >
                        <Column field="" title="" /> 
                        
                        {this.createColumns(this.state.columnList)}
                    </Grid>

                    <WidgetDataSourceLoader
                        dataState={this.state.dataState}
                        onDataReceived={this.dataReceived}
                        dataSourceId={this.WidgetDataSourceId}
                    />
                </div>
        );
    }
}


