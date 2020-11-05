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
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable'
console.log('json=',data)

function App() {

  return (

    <div className="App">
    <h1>IronStore</h1>
    <FilterableProductTable products={data}/>
    </div>
  );
}
  


export default App;



