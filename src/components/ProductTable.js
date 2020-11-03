import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
    return(
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => (
                        <ProductRow key={index} name={product.name} price={product.price}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;