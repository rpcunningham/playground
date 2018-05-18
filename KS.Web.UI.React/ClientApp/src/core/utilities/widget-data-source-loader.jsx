
import React from 'react';
import ReactDOM from 'react-dom';
import { toODataString } from '@progress/kendo-data-query';

export class WidgetDataSourceLoader extends React.Component {
    DataSourceId = this.props.dataSourceId;
    baseUrl =`${process.env.REACT_APP_CIB_API_ROOT_URL}/api/DynamicData?%24format=json&DataSourceId=${this.DataSourceId}&%24count=true&`;
    init = {
        method: 'GET', accept: 'application/json', headers: {} };

    Top = 25;
    OrderBy = "TradeDate";
    Order = "desc";
    lastSuccess = '';
    pending = '';

        
    requestDataIfNeeded = () => {
        if (this.pending || toODataString(this.props.dataState) === this.lastSuccess) {
            return;
        }
        this.pending = toODataString(this.props.dataState);
        fetch(this.baseUrl + this.pending, this.init)
            .then(response => response.json())
            .then(json => {
                this.lastSuccess = this.pending;
                this.pending = '';
                if (toODataString(this.props.dataState) === this.lastSuccess) {
                    this.props.onDataReceived.call(undefined, {
                        data: json.Items,
                        total: json['@odata.count']
                    });
                } else {
                    this.requestDataIfNeeded();
                }
            });
    }

    render() {
        this.requestDataIfNeeded();
        return this.pending && <LoadingPanel />;
    }
}


class LoadingPanel extends React.Component {
    render() {
        const loadingPanel = (
            <div className="k-loading-mask">
                <span className="k-loading-text">Loading</span>
                <div className="k-loading-image"></div>
                <div className="k-loading-color"></div>
            </div>
        );

        const gridContent = document && document.querySelector('.k-grid-content');
        return gridContent ? ReactDOM.createPortal(loadingPanel, gridContent) : loadingPanel;
    }
}
