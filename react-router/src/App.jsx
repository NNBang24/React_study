import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './screens/Home/Home'
import BlogList from './screens/BlogList/BlogList'
import NotFound from './screens/NotFound/NotFound'
import BlogDetail from './screens/BlogDetail/BlogDetail'
import Dashboard from './screens/Dashboard/Dashboard'
import Posts from './screens/Dashboard/Posts/Posts'
import Stats from './screens/Dashboard/Stats/Stats'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<BlogList />} />
        <Route path='/blogs/:id' element={<BlogDetail />} />
        <Route path='/old-blogs' element={<Navigate to={"/blogs"} />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='posts' element={<Posts />} />
          <Route path='stats' element={<Stats />} />
        </Route>
        <Route path='*' element={<NotFound />} /> {/* Route loi Url */}
      </Routes>

    </BrowserRouter>

  )
}

export default App
