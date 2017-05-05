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
            priceData = priceData.reverse();
            console.log(priceData);
            return priceData;
        }
        return null;
    } 

    render() {
        const meta = this.retrieveStockMetaData();
        const priceData = meta ? this.retrieveStockPriceData() : [[0,0]];   //initially empty array

        //contains the array of date points
        const dateSet = priceData.map((date) => {
            return date[0];
        })

        //contains the array of price points
        const valueSet = priceData.map((value) => {
            return value[1];
        })  
        /*if no data initial render only */
        if(!meta) {
            return (
                <div>
                    <LineChart dataSet={dateSet} valueSet={valueSet} ticker="None"/>
                </div>
            )
        }
        console.log('price' + priceData.price);
        console.log(priceData.date);
        return (
            <div className="chart-container"> 
                <h3>{meta.ticker}</h3>
                <div className>
                    <LineChart dateSet={dateSet} valueSet={valueSet} ticker={meta.ticker}/>
                </div>
                <div id="chart-meta">
                    <div>Name: {meta.name}</div>
                    <div>Start Date: {meta.startDate}</div>
                    <div>End Date: {meta.endDate}</div>
                </div>
            </div>
        )
    };
}

StockChart.PropTypes = {
    data: PropTypes.array
}

export default StockChart