import React from 'react';
import ReactDOM from 'react-dom';
import './all.css';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ProductsLoader } from './products-loader.jsx';

export class KendoGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: { data: [], total: 0 },
            dataState: { take: 10, skip: 0 }
        };
    }

    dataStateChange = (e) => {
        this.setState({
            ...this.state,
            dataState: e.data
        });
    }

    dataRecieved = (products) => {
        this.setState({
            ...this.state,
            products: products
        });
    }

    render() {
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
                    <Column field="IssueName"  title="IssueName" />
                    <Column field="CounterpartyCount"  title="CounterpartyCount" />
                    <Column field="Status"  title="Status" />
                    <Column field="TotalQuantity"  title="TotalQuantity" />
                    <Column field="Price"  title="Price" />
                    <Column field="Symbol"  title="Symbol" />
                    <Column field="TradeDate"  title="TradeDate" />
                    <Column field="Participation"  title="Participation" />
                    <Column field="SellingConcession"  title="SellingConcession" />

                </Grid>

                <ProductsLoader
                    dataState={this.state.dataState}
                    onDataRecieved={this.dataRecieved}
                />
            </div>
        );
    }
}