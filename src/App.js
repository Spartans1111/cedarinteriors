// src/App.js
import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'; 
import Header from '../src/components/header/header'; 
import Home from '../src/components/Home/home';
import About from '../src/components/about/about';
import Service from '../src/components/service/service';
import Footer from '../src/components/footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/" element={<Home />} />
     </Routes>
     <Footer/>
  </BrowserRouter>
     
      
    </div>
  );
}

export default App;

