import React from 'react';


class ProductRow extends React.Component{

     
render(){
    const productFinal = this.props.productIntable
    const name = productFinal.stocked ? productFinal.name : <span style ={{color:"red"}} >{productFinal.name}</span>
    return(

        <tr>
            <td>{name}</td>
            <td>{productFinal.price}</td>
        </tr>
    )
}

}

export default ProductRow;
