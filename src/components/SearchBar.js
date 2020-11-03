import React from 'react';

const SearchBar = () => {
    return(
        <div>
            <form>
                <div class="form-group">
                    <label htmlFor="search">Search</label>
                    <input type="text" id="search" className="form-control" />
                </div>
                <div class="form-group">
                    <label htmlFor="stock">Only show products on stock</label>
                    <input type="checkbox" id="stock" className="form-check-label mx-2" />
                </div>
                </form>
        </div>
    )
}

export default SearchBar;