import React from "react";


const ProductRow = (props) => {

  const toto = props.toto

    return(
    
    <table>
    <tr className="productRow">
      <td>{toto.name}</td>
      <td>{toto.price}</td>
      </tr>
    </table>
    
    )
      
}


  export default ProductRow;