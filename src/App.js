import React from 'react';
import { Routes, Route } from 'react-router-dom';
//pages
import Home from '../src/page/Home'
import All from '../src/page/All'
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/All' element={<All/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
