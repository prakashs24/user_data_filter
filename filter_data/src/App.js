import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import FilterPage from './Components/FilterPage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/filterPage' element={<FilterPage />} ></Route>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
