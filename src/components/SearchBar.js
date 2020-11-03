import React from 'react';

class SearchBar extends React.Component {
    state = {
        query: ''
    }
    render(){
        return(
            <div>
                <h2>Search</h2>
                <form>
                    <input type= 'text' name='search' value={this.state.query} placeholder='Search' onChange={(e) => this.setState({query: e.target.value})}  />
                </form>
            </div>
            

        )
    }
}

export default SearchBar;