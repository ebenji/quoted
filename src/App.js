import React from 'react';
import './App.css';
import CardList from './CardList';
import {quotes} from "./quotes";


function App() {
  return (
    <div className="tc">
      <h1 className='f1'>Ethan's Favourite Quotes</h1>
        <CardList quotes= {quotes} />
    </div>
  );
}

export default App;
