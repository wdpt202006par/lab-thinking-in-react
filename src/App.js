// import React from 'react';
// import FilterableProductTable from './components/FilterableProductTable';
// // import SearchBar from './SearchBar'
// // import ProductTable from './ProductTable'
// import data from './datas.json'
// import './App.css';



// class App extends React.Component {
   
//  render(){

//   return (
//     <div className="App">
//       <h1>IronStore</h1>
//       <FilterableProductTable products={ data } />
//     </div>
//   )
//  };
  

// }

// export default App;



import React from 'react';
import './App.css';
import json from './data.json'
console.log('json=',json)

function App() {

  return (

    <div className="App">
    <h1>IronStore</h1>
    
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        {/* {json.map(el =>{
          return(


            
          )

        })} */}

         <tr>
        <td> 
          {json.data[0].name}
        </td>
        <td> 
        {json.data[0].price}
        </td>

         </tr>
      </table>
    </div>
  );
}
  


export default App;



