import React, { Component } from 'react';

class SearchBar extends Component {

	state = {
		search: '',
		inStock: false
	}

	changeHandler = (e) => {
		let { name, value, type } = e.target;
		console.log(('event:', e.target));
		if(type === 'checkbox'){
			value = e.target.checked;
		}

		this.setState({ [name]: value },
			this.handleSubmit)
			this.handleSubmit()
	}

	handleSubmit = () => {
		this.props.searchTerm(this.state)
		console.log('SearchTerm: ', this.props.searchTerm(this.state));
	}

  render() {
    return (
      <div>
        <p>Search</p>
				<form action="">
					<input type="search" name="search" placeholder="Search..." value={this.state.search} onChange={this.changeHandler} />

					<input type="checkbox" name="inStock" id="inStock" value={this.state.inStock} onChange={this.changeHandler} />
					<p style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Only show products on stock</p>
				</form>
      </div>
    );
  }
}

export default SearchBar;
