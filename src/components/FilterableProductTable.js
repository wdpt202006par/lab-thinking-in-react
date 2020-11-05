import React from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import json from '../data.json'


class FilterableProductTable extends React.Component {
  state = {
    products: json.data ,
    query: ''
  };


  sendQuery = (val) => { // lab IronNutrition
    this.setState({
      query: val
    })
  }

  render() {

    // const copyData = [...this.state.products]
    console.log("Coucou")
    const filteredProducts = this.state.query
    ? this.state.products.filter((product) => product.name.includes(this.state.query) || 
    product.name.toLowerCase().includes(this.state.query) ||
    product.name.toUpperCase().includes(this.state.query) ||
    product.price.toString().includes(Number(this.state.query)
    )) 
    : this.state.products;

    return(
      <div className="box">
        <SearchBar sendQuery={this.sendQuery}/>

        <ProductTable products={filteredProducts} />

      {/* {filteredProducts.map((product, i) => {
            return <ProductTable {...product} key={i} />;
          })}   */}
      </div>
         
)
}
}

export default FilterableProductTable;



// class FilterableProductTable extends React.Component {
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

// export default FilterableProductTable;





