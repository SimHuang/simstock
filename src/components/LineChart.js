import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {
    constructor(props) {
        super(props);
    }

    //only render once never rerender again
    shouldComponentUpdate() {
        return false;
    }

    //component will recieve the latest data
    componentWillReceiveProps(nextProps) {
        this.myChart.data.labels = nextProps.dateSet;
        this.myChart.data.data = nextProps.valueSet;
        this.myChart.update();
    }

    componentDidMount() {
        let ctx = document.getElementById('stock-chart');
        
        let valueSet = this.props.valueSet;
        let dateSet = this.props.dateSet;
        let ticker = this.props.ticker;
        var data = {
            labels: dateSet,
            datasets: [
                {
                    label: ticker,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: valueSet,
                    spanGaps: false,
                }
            ]
        };

        // let ctx = this.refs.chart;
        if(ctx) {
            this.myChart = new Chart(ctx, {
                type: 'line',
                data: data
            });
        }
    }

    // resizeCanvas() {
    //     let canvas = document.getElementById('stock-chart');
    //     canvas.height = window.height;
    //     canvas.width = window.width;
    // }

    render() {
        return (
            <div>
                <canvas id="stock-chart" width={window.innerWidth} height={window.innerHeight * .60} ref="chart"></canvas>  
            </div>
        );
    }
}

export default LineChart