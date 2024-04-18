import React from 'react';
import './App.css';
import Router from "./Router";
import {store} from "./store";
import {getMovies} from "./store/actions/movieSlice";

store.dispatch(getMovies({page:undefined,type:'movie'}));

function App() {
    return (
        <div className="App">
            <Router/>
        </div>
    );
}

export default App;