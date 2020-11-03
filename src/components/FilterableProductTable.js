import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    state = {
        products: this.props.products.data
    }

    render() {
        return( 
            <div className="container">
                <h1>IronStore</h1>
                <SearchBar />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}

export default FilterableProductTable;