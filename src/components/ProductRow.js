import React from 'react';

class ProductRow extends React.Component {
    render(){
        return(
            <div>
                {
                    this.props.stocked ? 
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.price}</td>
                    </tr> :
                    <tr>
                        <td style = {{color:'red'}}>{this.props.name}</td>
                        <td>{this.props.price}</td>
                    </tr>
                }
                

            </div>

        )
    }
}

export default ProductRow;