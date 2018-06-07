import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../layout/Layout';
import { Home } from '../app/Home';
import { FetchData } from '../app/FetchData';
import { Counter } from '../app/Counter';
import { Profile } from '../app/Profile';
import { BigGridPage } from '../app/collectionPages/bigGridPage';



export default class App extends Component {
    displayName = App.name
    constructor(props) {
        super(props);
        this.state = { token: props.token };
    }
    
    
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetchdata' component={FetchData} />                
                <Route path='/biggrid' component={BigGridPage} />
                <Route path='/profile' component={Profile} />
            </Layout>
        );
    }
}
