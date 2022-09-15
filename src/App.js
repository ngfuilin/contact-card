import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./routes/Home.js"
import Detail from "./routes/Detail.js"
import Layout from "./Layout.js"
import React from 'react';

function App() {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />    
          <Route path="detail/:id" element={<Detail />} />
          
        </Route>
      </Routes>
    </> 
  );
}

export default App;
