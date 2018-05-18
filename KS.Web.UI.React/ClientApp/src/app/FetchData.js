import React, { Component } from 'react';

export class FetchData extends Component {
    displayName = FetchData.name

    constructor(props) {
        super(props);
        this.state = { controlPoints: [], loading: true };
        

        fetch(`${process.env.REACT_APP_CIB_API_ROOT_URL}/api/data/ApplicationControlPoints`
            , {
            method: 'GET'
            //,headers: {'Accept': 'application/json','Content-Type': 'application/json',}
            //,body: JSON.stringify({firstParam: 'yourValue',secondParam: 'yourOtherValue',})
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ controlPoints: data, loading: false });
            });
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
