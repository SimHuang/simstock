import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ALPHA_VANTAGE_API_KEY = '4WJU';
const ROOT_URL = ''

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    //retrieve quote data related to stock
    fetchStockQuote(symbol) {
        const url = 
        axios.get(ROOT_URL, {
            params: {
                symbol:symbol
            }   
        }).then(response=> {
            console.log(response);        
        }).error(error => {
            console.log(error);
        })
    }


    onInputChange(event) {
        this.setState({term:event.target.value});
    }


    onFormSubmit(event) {
        event.preventDefault();
        //search stock quote
        // this.fetchStockQuote(this.state.term);  //search stock quote

        //testing
        let data = [1,2,3,4,5];
        this.props.stockData(data);
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