import React from 'react';
import json from './data.json'
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';


function App() {
  return (
    <div className="App">
      <FilterableProductTable products={json.data} />
    </div>
  );
}

export default App;
