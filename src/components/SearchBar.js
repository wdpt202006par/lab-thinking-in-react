import React from 'react';

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input type="search" value={props.query} onChange={(e) => props.updateQuery(e.target.value)} />

      <p>
        <label>
          <input type="checkbox" value={props.instockOnly} onChange={(e) => props.toggleInstockOnly()} />
          Only show product in stock
        </label>
      </p>
    </div>
  );
}

export default SearchBar;