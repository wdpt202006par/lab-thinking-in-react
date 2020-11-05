import React from 'react';
import ProductRow from './ProductRow';


class ProductTable extends React.Component {
    
    render(){
        console.log('props.products table',this.props.products)
       
        return(
            <div>
               <table>
                   <tbody>
                   <tr>
                       <th>Name</th>
                       <th>Price</th>
                   </tr>
                   {this.props.products.map((product,index) => {
                       return (
                        
                            <ProductRow key= {index} {...product}/>
                        
                   )})}
                   </tbody>
                </table> 
            </div>

        )
    }
}

export default ProductTable;