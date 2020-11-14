import React from 'react';


function ProductRow(props) {
  const {name, price, stocked} = props.product;

  const inlinecss = {};
  if (!stocked) {
    inlinecss.color = 'red';
  }

  return (
    <tr className="ProductRow">
      <td style={inlinecss}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;