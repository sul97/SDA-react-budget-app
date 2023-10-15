import React ,{useState}from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Budget from './Budget';

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Budget/>} />
      </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;
