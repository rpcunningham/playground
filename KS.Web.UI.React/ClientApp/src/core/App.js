import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../layout/Layout';
import { Home } from '../app/Home';
import { FetchData } from '../app/FetchData';
import { Counter } from '../app/Counter';
import { BigGridPage } from '../app/collectionPages/bigGridPage';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetchdata' component={FetchData} />                
                <Route path='/biggrid' component={BigGridPage} />
            </Layout>
        );
    }
}
