import React from 'react'
import CRM from '../pages/dashboard/CRM'
import Navbar from '../components/Nav/Navbar'
import {Route, Routes} from 'react-router-dom'
import Account from '../pages/Account'
const Path = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<CRM/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
    </div>
  )
}

export default Path