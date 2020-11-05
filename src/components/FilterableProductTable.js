import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    state = {
        products: this.props.products.data,
        query: ''
    }

    searchProduct = (data) => {
        this.setState({
            query: data.target.value,
        })
    }

    render() {
        const filteredProducts = this.state.products.filter(product => product.name.toLowerCase().includes(this.state.query));
        return( 
            <div className="container">
                <h1>IronStore</h1>
                <SearchBar query = {this.state.query} search={this.searchProduct} />
                <ProductTable products={filteredProducts} />
            </div>
        )
    }
}

export default FilterableProductTable;