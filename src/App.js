import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./routes/Home.js"
import Detail from "./routes/Detail.js"
import Layout from "./Layout.js"
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);

 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />    
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
