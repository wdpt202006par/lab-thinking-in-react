import React from 'react';
import ProductRow from './ProductRow';


class ProductTable extends React.Component {
    
    render(){
        console.log('props.products table',this.props.products)
       
        return(
            <div>
               <table>
                   <thead>
                       <th>Name</th>
                       <th>Price</th>
                   </thead>
                   {this.props.products.map((product,index) => {
                       return (
                        <div key= {index}>
                            <ProductRow {...product} />
                        </div>)
                   })}
                </table> 
            </div>

        )
    }
}

export default ProductTable;