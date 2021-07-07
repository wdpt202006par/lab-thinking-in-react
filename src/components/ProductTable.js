import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    //console.log('this.props.products', this.props.products)
    const products = this.props.products;
    return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<ProductRow products= {this.props.products} />
					</tbody>

					{/* <tbody>
						{products.data.map((el, index) => {
							{
								this.props.products.stocked ? (
									<ProductRow products={el} key={index} />
								) : (
									<ProductRow products={el} key={index} className="red" />
								);
							}
						})}
					</tbody> */}
				</table>
			</div>
    );
  }
}

export default ProductTable;
