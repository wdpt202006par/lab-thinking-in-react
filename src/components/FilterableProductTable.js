import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

	state = {
		products: this.props.products.data,
		filteredProductsBySearch: '',
		inStock: false
	}

	filterProducts = (searchInput) => {
		const filteredProductArrByInStock = this.state.products.filter(product => product.stocked)
		let filteredProducts

		this.setState(
			{filteredProductsBySearch: filteredProducts})
	}
	// checkInStock = (searchInput) => {
	// 	this.setState({ [name]: value },
	// 			this.handleSubmit)
	// 			this.handleSubmit()
	// 	if(searchInput.inStock){
	// 		filteredProducts = filteredProductArrByInStock.filter(product => product.name.toLowerCase().startsWith(searchInput.search))
			
	// 	} else {
	// 		filteredProducts = this.state.products.filter(product => product.name.toLowerCase().startsWith(searchInput.search))
	// 	}
	// }

  render() {
    //console.log('this.props.products', this.props.products);

    return (
      <div>
				<h1>IronStore</h1>
        <SearchBar products= { this.state.products } 
				searchTerm = { this.filterProducts} inStock = { this.checkInStock} />
				{
					this.state.filteredProductsBySearch !== "" ? <ProductTable products={ this.state.filteredProductsBySearch } /> 
					: 
					<ProductTable products= { this.state.products } />
				}
      </div>
    );
  }
}

export default FilterableProductTable;
