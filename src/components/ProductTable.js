import React from 'react';
import ProductRow from './ProductRow'


class ProductTable extends React.Component {
  render() {
      const products = this.props.products;
      return (
      <table>
        <tbody>
          {products.data.map((product,id)=> {
            return <ProductRow product={product} key={id}/>
          })}
        </tbody>
      </table>        
)
}
}

export default ProductTable;


// class ProductTable extends React.Component {
//   render() {
//     return(
//         <div className="box">
//           <article className="media">
            
//             <div className="media-content">
//               <div className="content">
//                 <p>
//                   <strong>{this.props.name}</strong> <br />
//                   <small> ${this.props.price} </small>
//                 </p>
//               </div>
//             </div>
//             <div className="media-right">
//               <div className="field has-addons">
//                 <div className="control">
//                   <input className="input" type="number" value={this.props.category} />
//                 </div>
   
//           </div>
//         </div>
//       </article>
//   </div>
         
// )
// }
// }

// export default ProductTable;





