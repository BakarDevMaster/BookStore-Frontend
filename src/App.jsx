// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './home/Home'
import Courses from './korse/Courses'
import Signup from './components/Signup'


const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
