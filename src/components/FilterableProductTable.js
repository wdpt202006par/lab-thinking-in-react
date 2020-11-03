import React from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends React.Component {
    state ={
        query:''
    }
    filter = (query) => {
        let productsCopy = [...this.props.products.data]
        return productsCopy.filter(product => product.name.toLowerCase().includes(query))
    }
    render(){
        return(
            <div>
                <SearchBar />
                <ProductTable products= {this.props.products.data}/>
            </div>

        )
    }
}

export default FilterableProductTable;