import React from 'react';
import './App.css';
import { Navbar } from './components'; 
import { Home, Demos } from './pages'
import { Route, Routes } from 'react-router';
import { withStyles } from '@material-ui/core';

const styles = {
}

function AppComponent() {
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
    </div>
  );
}

const App = withStyles(styles)(AppComponent);

export default App;
