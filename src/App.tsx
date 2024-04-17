import React from 'react';
import './App.css';
import Router from "./Router";
import {store} from "./store";
import {fetchProducts} from "./store/actions/productSlice";
store.dispatch(fetchProducts({page:30}));

function App() {
  return (
      <div className="App">
        <Router/>
      </div>
  );
}

export default App;