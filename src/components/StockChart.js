import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js'

class StockChart extends Component {
    constructor(props) {
        super(props);

    }

    //parse stock data property from props.data
    renderStockMetaData() {
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

    //construct chart to display data
    renderChart() {
        //TODO:contruct chart
        // let context = document.getElementById('stock-chart');
        // var scatterChart = new Chart(context, {
        //     type: 'line',
        //     data: {
        //         datasets: [{
        //             label: 'Scatter Dataset',
        //             data: [{
        //                 x: -10,
        //                 y: 0
        //             }, {
        //                 x: 0,
        //                 y: 10
        //             }, {
        //                 x: 10,
        //                 y: 5
        //             }]
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             xAxes: [{
        //                 type: 'linear',
        //                 position: 'bottom'
        //             }]
        //         }
        //     }
        // });
    }

    render() {
        const meta = this.renderStockMetaData();
        if(!meta) {
            return (
                <div>Enter data</div>
            )
        }
        return (
            <div className="chart-container">
                <div id="chart-meta">
                    <div>Ticker: {meta.ticker}</div>
                    <div>Name: {meta.name}</div>
                    <div>Start Date: {meta.startDate}</div>
                    <div>End Date: {meta.endDate}</div>
                </div>
                <div id="chart-view">
                    <canvas id="stock-chart" width="800" height="600"></canvas>
                    {this.renderChart()};
                </div>
            </div>
        )
    };
}

StockChart.PropTypes = {
    data: PropTypes.array
}

export default StockChart