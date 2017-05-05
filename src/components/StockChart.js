import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js'
import LineChart from './LineChart';

class StockChart extends Component {
    constructor(props) {
        super(props);

    }

    //parse stock data property from props.data
    retrieveStockMetaData() {
        if(this.props.data.data) {
            const stock = this.props.data.data.dataset;
            let meta = {};
            meta.ticker = stock.dataset_code;
            meta.name = stock.name;
            meta.startDate = stock.start_date;
            meta.endDate = stock.end_date;

            return meta;
        }
        return null;
    }

    //construct object with date array and price array
    retrieveStockPriceData() {
        if(this.props.data.data) {
            let priceToDate = {
                price: [],
                date: []
            };
            let priceData = this.props.data.data.dataset.data;
            priceData.forEach((dayPrice) => {
                priceToDate.date.push(dayPrice[0]);
                priceToDate.price.push(dayPrice[1]);
            });
            console.log(priceData);
            return priceData;
        }
        return null;
    } 

    render() {
        const meta = this.retrieveStockMetaData();
        const priceData = this.retrieveStockPriceData();
        let chartClass = meta ? 'chart-visible' : 'chart-hide';
  
        /*if no data initial render only */
        if(!meta) {
            return (
                <div className={chartClass}>
                    <LineChart />
                </div>
            )
        }
        console.log('price' + priceData.price);
        console.log(priceData.date);
        return (
                  
            <div className="chart-container">
                <div id="chart-meta">
                    <div>Ticker: {meta.ticker}</div>
                    <div>Name: {meta.name}</div>
                    <div>Start Date: {meta.startDate}</div>
                    <div>End Date: {meta.endDate}</div>
                </div>
                <div className={chartClass}>
                    <LineChart/>
                </div>
            </div>
        )
    };
}

StockChart.PropTypes = {
    data: PropTypes.array
}

export default StockChart