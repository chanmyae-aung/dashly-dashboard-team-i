import React from 'react'
import Path from './routes/Path'
import { stateContextCustom } from './context/StateContext'

const App = () => {
  const {hide} = stateContextCustom()

  return (
    <div onClick={hide}>
      <Path/>
    </div>
  )
}

export default App