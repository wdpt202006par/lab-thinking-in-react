import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    return (
        <tr >
          <td>{this.props.products.name}</td>
          <td>{this.props.products.price}</td>
         
          <td  >{this.props.products.stocked}</td>
        </tr>
    );
  }
}

export default ProductRow;
