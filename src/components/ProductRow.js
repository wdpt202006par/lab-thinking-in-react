import React, { Component } from 'react';

class ProductRow extends Component {
  render() {

		const productsArr = this.props.products;
		console.log("ProductsArr :", productsArr);
    return (
			productsArr.map((product, index) => 
				<tr key = {index} style = {{ color: !product.stocked && 'red' }}>
					<td>{product.name}</td>
					<td>{product.price}</td>
				</tr>
				)
        // <tr >
        //   <td>{this.props.products.name}</td>
        //   <td>{this.props.products.price}</td>
         
        //   <td  >{this.props.products.stocked}</td>
        // </tr>
    );
  }
}

export default ProductRow;
