import React, { Component } from 'react';
import fetchBreezeData from '../core/utilities/fetchBreezeData';

export class FetchData extends Component {
    displayName = FetchData.name

    constructor(props) {
        super(props);
        this.state = { controlPoints: [], loading: true };
        
        fetchBreezeData('ApplicationControlPoints').then(
            response => { 
                if (response && response.length > 0) {
                    this.setState({ controlPoints: response, loading: false });
                }
            }
        );
    }

    static renderForecastsTable(controlPoints) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {controlPoints.map(controlPoints =>
                        <tr key={controlPoints.Name}>
                            <td>{controlPoints.Name}</td>
                            <td>{controlPoints.Description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.controlPoints);

        return (
            <div>
                <h1>Control Points</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}
