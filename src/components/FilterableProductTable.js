import React from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends React.Component {
    state ={
        products: this.props.products.data,
        query:'',
        check: false
    }
    handlerChange = (event) => {
        console.log("handlerchange", event.target.value, event.target.checked)
        this.setState({ 
            query:event.target.value,
        })
    }
    handlerCheck = (event => {
        this.setState({ 
            check:event.target.checked,
        })
    })
    
    // handleFilter = (query) => {
    //     let productsCopy = [...this.props.products.data]
    //     let productsFilter = productsCopy.filter(product => product.name.toLowerCase().includes(query))
    //     console.log('filter products arr',productsFilter)
    //     this.setState({products:productsFilter})
    // }
    render(){
        console.log('this.state.check',this.state.check )
        const productsFilter = this.state.products.filter(product => product.name.toLowerCase().includes(this.state.query)).filter(product => {
            if (this.state.check === true) {
                return product.stocked === true
            } else {
                return product
            }
        })
        return(
            <div>
                <SearchBar query = {this.state.query} search = {this.handlerChange} check = {this.handlerCheck}/>
                <ProductTable products= {productsFilter}/>
            </div>

        )
    }
}

export default FilterableProductTable;