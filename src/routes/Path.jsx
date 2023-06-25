import React from 'react'
import CRM from '../pages/dashboard/CRM'
import Navbar from '../components/Nav/Navbar'
import {Route, Routes} from 'react-router-dom'
const Path = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<CRM/>}/>
        </Routes>
    </div>
  )
}

export default Path