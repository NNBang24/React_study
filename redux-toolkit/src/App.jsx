import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './screens/Home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>

          <Route path='/' element={< ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
