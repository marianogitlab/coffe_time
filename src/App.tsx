import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AiOutlineCoffee } from 'react-icons/ai'; 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ fontSize: '110px' }}>
       <AiOutlineCoffee />
      </div>
      <h1>Coffe?</h1>
    </>
  )
}

export default App
