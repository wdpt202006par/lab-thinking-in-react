import React from 'react';

class SearchBar extends React.Component {
    state = {
        search: '',
    };
    
    handleInputChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;
        
        this.setState({
          [name]: value,
        });
    
        this.props.sendQuery(value);
      };
    
      render() {
        return (
            <div>
                <input type="text" name="search" placeholder="Search" value={this.state.search} onChange={this.handleInputChange}></input>
            </div>
        );
      }
    }

export default SearchBar

