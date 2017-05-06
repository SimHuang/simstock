import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const QUANDL_API_KEY = 'b8Z3NXgmTmARUMxs6rUe';
const START_DATE = '2017-01-01'; //YYYY-MM-DD
// const ROOT_URL = `https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=${QUANDL_API_KEY}`;

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    //retrieve quote data related to stock
    fetchStockQuote(symbol) {
        let url = `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}.json?column_index=4&start_date=${START_DATE}&api_key=${QUANDL_API_KEY}`;
        axios.get(url)
        .then(response=> {
            // console.log(response);    
            this.props.stockData(response); //return data back to parent through callback
        }).catch(error => {
            // console.log(error);
            this.props.stockData({'error':'Stock Data Unavaliable'});
        })
    }

    onInputChange(event) {
        this.setState({term:event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        //search stock quote
        this.fetchStockQuote(this.state.term);  //search stock quote
        this.setState({term: ''});
    }

    render() {
        return (
            <div className="search-container">
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input 
                        className="search-bar"
                        type="text" 
                        placeholder="Enter Ticker symbol" 
                        value={this.state.term}
                        onChange={this.onInputChange.bind(this)} //bind to current this
                        //onChange={(event)=> {this.onInputChange(event)}}
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
        );
    }
}

SearchBar.PropTypes = {
    stockData: PropTypes.func

}

export default SearchBar 