import React from 'react'
import CRM from '../pages/dashboard/CRM'
import Navbar from '../components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Default from '../components/Default/Default'
const Path = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<CRM/>}/>
          <Route path='default' element={<Default/>}/>
        </Routes>
    </div>
  )
}

export default Path