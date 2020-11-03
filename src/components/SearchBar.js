import React from 'react';

class SearchBar extends React.Component {
    render(){
        return(
            <div>
                <h2>Search</h2>
                <form>
                    <input type= 'text' name='search' placeholder='Search' />
                </form>
            </div>
            

        )
    }
}

export default SearchBar;