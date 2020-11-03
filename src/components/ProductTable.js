import React from "react";
import ProductRow from "./ProductRow"


const ProductTable = (props) => {
console.log("props:", props.products)
    return(

    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        
        <tbody>
        {props.products.map(product => {
          return (
            <ProductRow key={product.name} toto={product}/>
          )
        })}

        </tbody>

      </table>

    </div>
        
    )
}

  export default ProductTable;