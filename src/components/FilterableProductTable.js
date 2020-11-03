import React from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends React.Component {
    render(){
        console.log('props.products filter',this.props.products)
        return(
            <div>
                <SearchBar />
                <ProductTable products= {this.props.products.data}/>
            </div>

        )
    }
}

export default FilterableProductTable;