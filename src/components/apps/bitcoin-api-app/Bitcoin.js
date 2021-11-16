import React, { Component } from 'react';

export default class Bitcoin extends Component {
    const [data, setData] = useState([]);
    const [fetchingData, setFetchingData] = useState(true);

    useEffect(() => {
        const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';

        fetch(url) // fetch returns a promise
            .then(response => response.json())// response.json returns a promise json-ified
            .then(bitcoinData => {
                // console.log(bitcoinData.bpi);
                setFetchingData(false);
            })
            .catch(e => {
                console.log(e);
            })
        }, [])

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <h1>30 Day Bitcoin Price Chart</h1>
                    <h3>Info Box</h3>
                    <h3>Line Chart</h3>
                </div>
            </div>
        );
    }
};