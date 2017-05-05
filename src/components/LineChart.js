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

    componentDidMount() {
        let ctx = document.getElementById('stock-chart');
        // let ctx = this.refs.chart;
        if(ctx) {
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ["Red", "Blue", "Yellow"],
            datasets: [{
                label: '# of Likes',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ] 
                }]
            }
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
                <canvas id="stock-chart" width={window.innerWidth} height={window.innerHeight * .65} ref="chart"></canvas>  
            </div>
        );
    }
}

export default LineChart