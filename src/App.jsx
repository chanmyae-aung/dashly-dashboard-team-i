import React from 'react'
import Path from './routes/Path'
import { stateContextCustom } from './context/StateContext'

const App = () => {
  const {hide} = stateContextCustom()

  return (
    <div onClick={hide} className='bg-[#F1F5F7]'>
      <Path/>
    </div>
  )
}

export default App