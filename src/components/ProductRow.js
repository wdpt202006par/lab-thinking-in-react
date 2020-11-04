import React from 'react';


const ProductRow = (props) => {

    return (
        <div className="box">
            <tr>
              <td>{props.product.name}</td>
              <td>{props.product.price}</td>
              <td>{props.product.stocked}</td>
            </tr>
        </div>
        )
  };
export default ProductRow;

