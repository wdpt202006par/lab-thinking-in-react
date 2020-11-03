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

      {this.props.products.map(row => {
          return (<ProductRow name ={row.name} price={row.price }/>)})
      }
    </tbody>
</table>
    )
}
}

export default ProductTable;
