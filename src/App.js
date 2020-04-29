import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button , AppBar, Tab, Tabs  } from '@material-ui/core';

var value

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AppBar position="fixed" className="appbar">
         
       <Tabs  aria-label="simple tabs example">
       <h3 style={{paddingLeft:20+'px'}}>kevinveld2001</h3>
        <Tab label="home" />
        <Tab label="project" />
        <Tab label="contact" />
      </Tabs>

       </AppBar>
      </header>
    </div>
  );
}

export default App;
