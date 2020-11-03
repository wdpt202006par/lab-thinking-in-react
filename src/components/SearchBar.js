import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <p>Search</p>
        <input type="text"></input>
        <label>Only show products on stock
        <input type="checkbox"></input>
        </label>
      </div>
    );
  }
}

export default SearchBar;
