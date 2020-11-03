import React from "react";


class SearchBar extends React.Component {

  render(){

    return(
      <div className="searchbar">
      
      <label>Search
      <input type="text"></input>
      </label>
      
      <label>Only show products on stock
      <input type="checkbox"></input>
      </label>
    
      </div>

    )
  }
  
}

export default SearchBar;