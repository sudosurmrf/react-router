import { useState } from 'react'
import {  Routes, Route, Link, Outlet } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import Red from './Red.jsx'
import Blue from './Blue.jsx'
import Navbar  from './navbar.jsx'



function App() {


  

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
        </Routes>
        <Outlet />
    </>
  );
}

export default App
