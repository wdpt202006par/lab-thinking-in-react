import React from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {

    state = {
        value:""
    }

    constructor (props) {
        super(props);
        this.filterProducts = this.filterProducts.bind(this);
    }

    
    filterProducts(e) {
        let filteredProducts = this.props.products;
        this.setState({value:e.target.value});
        let containsSearch = this.state.value;

        if (containsSearch) {
            filteredProducts.filter(filteredProduct => filteredProduct.name.includes(containsSearch))
        }
    }

    render() { 
        
        return(
            <div>
                <h1>IronSTore</h1>
                <SearchBar filterProducts={ () => this.filterProducts() } value={this.state.value} />
                <ProductTable productInfilterable ={this.props.products}/>
            </div>
        )
    }

}

export default FilterableProductTable;