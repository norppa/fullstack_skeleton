import { useEffect, useState } from 'react'

import * as API from './api'
import './App.css'

const App = () => {

  const [message, setMessage] = useState('')

  useEffect(async () => {
    console.log('env', process.env.NODE_ENV)
    const result = await API.getName()
    console.log('name', result)
    setMessage(result.name)
  })

  return (
    <div id="App">{message}</div>
  )
}

export default App