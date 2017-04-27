import React, { Component } from 'react'
import SearchBar from './SearchBar'
import StockChart from './StockChart'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            symbol: '',
            data: {}
        }
    }

    //fetch stock data from child component
    fetchStockData(data) {
        this.setState({data:data});
    }

    render() {
        return (
            <div>
                <SearchBar stockData={this.fetchStockData.bind(this)}/>
                <StockChart data={this.state.data}/>
            </div>
        );
    }
}

export default App