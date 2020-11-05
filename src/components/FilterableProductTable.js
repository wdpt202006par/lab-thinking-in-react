import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    state = {
        products: this.props.products.data
    }

    searchProduct = (data) => {
        const filteredProducts = this.props.products.data.filter(product => {
            product.name.includes(data.search)
        });
        this.setState({
            products: filteredProducts
        })
    }

    render() {
        return( 
            <div className="container">
                <h1>IronStore</h1>
                <SearchBar searchProduct={this.searchProduct} />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}

export default FilterableProductTable;