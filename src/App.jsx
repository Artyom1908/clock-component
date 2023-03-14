import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AnalogClock from './AnalogClock'

function App() {
  const [count, setCount] = useState(0)

  return (

    < AnalogClock />
  )
}

export default App
