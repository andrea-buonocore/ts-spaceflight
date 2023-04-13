import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNav from './components/MyNav';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Container>
        <Home/>
      </Container>
    </div>
  );
}

export default App;
