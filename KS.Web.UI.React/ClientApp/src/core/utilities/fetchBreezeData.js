export default function FetchBreezeData(dataType, filterId, filterField) {
    const token = sessionStorage.getItem('cibToken');
    return fetch(`${process.env.REACT_APP_CIB_API_ROOT_URL}/api/data/${dataType}`,
        { method: 'GET'
        ,mode: 'cors'
        ,headers: {
            'Authorization': `Bearer ${token}`, 
            }
        })
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