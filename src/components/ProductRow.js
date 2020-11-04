import React from 'react';

class ProductRow extends React.Component {
    render(){
        return(
           <tr>
                {
                    this.props.stocked ? 
                    <td colSpan='2'>
                        <span>{this.props.name}</span>
                        <span>{this.props.price}</span>
                    </td>
                        
                     :
                    <td>
                        <span style = {{color:'red'}}>{this.props.name}</span>
                        <span>{this.props.price}</span>
                    </td>
                        
                    
                }
                
            </tr>
          

        )
    }
}

export default ProductRow;