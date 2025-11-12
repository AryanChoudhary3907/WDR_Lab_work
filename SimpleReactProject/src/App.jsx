import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from './Component/Textfield'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextField />
    </>
  )
}

export default App
