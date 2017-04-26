import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js'

class StockChart extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="chart-container">
                {/*{
                    this.props.data.map((element,index) => {
                        return <div id={index}>{element}</div>
                    })
                }*/}
            </div>
        )
    };
}

StockChart.PropTypes = {
    data: PropTypes.array
}

export default StockChart