import React from 'react';
import './App.css';
import { Navbar } from './components'; 
import { Home, Demos, NotFoundPage } from './pages'
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/demos' element={<Demos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
