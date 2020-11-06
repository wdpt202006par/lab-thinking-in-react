import React from 'react';

class SearchBar extends React.Component {
    render(){
        return(
            <div>
                <h2>Search</h2>
                <form>
                    <input type= 'text' name='search'  placeholder='Search' value= {this.props.query} onChange={this.props.search}  />
                    
                    
                </form>
                <form>
                <label>
                        <input type='checkbox' name='inStock' onChange={this.props.check}/>
                        Only show products on stock
                    </label>
                </form>
            </div>
            

        )
    }
}

export default SearchBar;