import React from "react";


const ProductRow = (props) => {

  const productInProductRow = props.productInProductTable

  const outOfStockstyle = productInProductRow.stocked ? {color : "black"} : {color : "red"}
  
    return(
    

    <table>
      <tr className="productRow">

        <td style={outOfStockstyle}> {productInProductRow.name}</td>

        <td>{productInProductRow.price}</td>
      </tr>
    </table>
    
    )
      
}


  export default ProductRow;