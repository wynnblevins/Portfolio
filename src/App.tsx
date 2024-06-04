import React from 'react';
import './App.css';
import { Home, Navbar, Demos } from './components';
import { Route, Routes } from 'react-router';
import { NotFoundPage } from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/demos' element={<Demos />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
