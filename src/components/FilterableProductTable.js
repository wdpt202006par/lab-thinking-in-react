import React from "react";
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

class FilterableProductTable extends React.Component {
  state = {
    query:'',
    productInFilterable: this.props.products
  }
  
  filterHandler = (event) => {
    //récupérer la valeur saisie dans la barre de recherche
    let value = event.target.value;

    //filtrer avec les dd json == saisie COMMENCE PAR
    //mettre le mot dans state
    //envoyer le state ds la value

    

    this.setState({

    })
  }

  render(){
    console.log(this.state.productInFilterable)
    return(
    <div className="FilterableProductTable">

      <SearchBar/>
      <ProductTable productsInFilterable = {this.props.products}/>
    </div>

    )
  }
  
}

export default FilterableProductTable;