import React from 'react';

class SearchBar extends React.Component {
    state = {
        search: ''
    };

    isTyping = (e) => {
        this.setState({
            search: this.props.searchProduct(this.state)
        })
    };

    render() {
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="search">Search</label>
                        <input type="text" id="search" className="form-control" onChange={this.isTyping} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Only show products on stock</label>
                        <input type="checkbox" id="stock" className="form-check-label mx-2" />
                    </div>
                    </form>
            </div>
        )
    }
}

export default SearchBar;