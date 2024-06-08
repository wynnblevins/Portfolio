import React from 'react';
import './App.css';
import { Footer, Navbar } from './components'; 
import { Home, Demos } from './pages'
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='AppContent'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/portfolio" element={<Home />}></Route>
          <Route path="/portfolio/home" element={<Home/>}></Route>
          <Route path='/portfolio/demos' element={<Demos />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
