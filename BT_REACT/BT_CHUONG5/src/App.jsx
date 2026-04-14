import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './screens/Home/Home'
import Header from './components/Header/Header'
import JobList from './screens/JobList/JobList'
import JobDetail from './screens/JobDetail/JobDetail'
import { JobProvider } from './Context/JobContext/JobContext'
import Admin from './screens/Admin/Admin'
import JobManager from './screens/Admin/JobManager/JobManager'
import AddJob from './screens/Admin/AddJob/AddJob'
import NotFound from './screens/NotFound/NotFound'


function App() {

  return (
    <>
      <JobProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/jobs' element={<JobList />} />
            <Route path='/jobs/:id' element={<JobDetail />} />

            {/* redirect */}
            <Route path="/careers" element={<Navigate to="/jobs" />} />

            <Route path='/admin' element={<Admin />}>
              <Route path='jobs' element={<JobManager />} />
              <Route path='add' element={<AddJob />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </JobProvider>


    </>
  )
}

export default App
