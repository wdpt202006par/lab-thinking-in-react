import React from 'react';
// import data from "../data.json";
import ProductRow from "./ProductRow";

class ProductTable extends React.Component{

   constructor(props){
       super(props)
   }

render(){
    return(

<table>
    <thead>
        <th>Name</th>
        <th>Price</th>
    </thead>
    <tbody>

      {this.props.productInfilterable.map(product => {
          return (<ProductRow productIntable ={product}/>)})
      }
    </tbody>
</table>
    )
}
}

export default ProductTable;
