import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ data } />
    </div>
  );
}

export default App;
