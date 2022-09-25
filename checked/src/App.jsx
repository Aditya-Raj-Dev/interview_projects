import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Checked from './component/Checked'
import Final from './component/Final'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Checked/>
        <Final/>
    </div>
  )
}

export default App
