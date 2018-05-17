
import React from 'react';
import ReactDOM from 'react-dom';
import { toODataString } from '@progress/kendo-data-query';

export class ProductsLoader extends React.Component {
    baseUrl = 'http://localhost:57899/api/DynamicData?%24format=json&DataSourceId=21b89eae-e838-e811-8209-2c56dc964f5f&%24top=25&%24orderby=TradeDate+desc&%24count=true';
    init = {
        method: 'GET', accept: 'application/json', headers: {} };

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
                    this.props.onDataRecieved.call(undefined, {
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
            <div class="k-loading-mask">
                <span class="k-loading-text">Loading</span>
                <div class="k-loading-image"></div>
                <div class="k-loading-color"></div>
            </div>
        );

        const gridContent = document && document.querySelector('.k-grid-content');
        return gridContent ? ReactDOM.createPortal(loadingPanel, gridContent) : loadingPanel;
    }
}
