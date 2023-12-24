import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Read from './Read'
import Update from './Update'
import Create from './Create'

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/read/:id' element={<Read/>}/>
    <Route path='/update/:id' element={<Update/>}/>
    <Route path='/create' element={<Create/>}/>
    </Routes>
    </Router>
  )
}

export default App
