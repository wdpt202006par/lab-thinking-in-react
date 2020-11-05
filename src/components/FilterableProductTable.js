import React from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends React.Component {
    state ={
        products: this.props.products.data,
        query:''
    }
    handlerChange = (event) => {
        console.log("handlerchange", event.target.value)
        this.setState({query:event.target.value})
    }
    
    // handleFilter = (query) => {
    //     let productsCopy = [...this.props.products.data]
    //     let productsFilter = productsCopy.filter(product => product.name.toLowerCase().includes(query))
    //     console.log('filter products arr',productsFilter)
    //     this.setState({products:productsFilter})
    // }
    render(){
        const productsFilter = this.state.products.filter(product => product.name.toLowerCase().includes(this.state.query))
        return(
            <div>
                <SearchBar query = {this.state.query} search = {this.handlerChange} />
                <ProductTable products= {productsFilter}/>
            </div>

        )
    }
}

export default FilterableProductTable;