import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import FormPage from './components/FormPage';
import EditPage from './components/EditPage';

function App() {
  return (
    
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/form" element={<FormPage />} />
    <Route path="/edit/:id" element={<EditPage />} />
  </Routes>
  );
}

export default App;
