import React from 'react';
import ReactDOM from 'react-dom';

export default function FetchBreezeData(dataType,filterId,filterField){
    return fetch(`${process.env.REACT_APP_CIB_API_ROOT_URL}/api/data/${dataType}`,
        { method: 'GET' })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (filterId) {
                let d = data.filter(x => {
                    return x[filterField] === filterId;
                });
                return d;
            }
            return data;
        });
}