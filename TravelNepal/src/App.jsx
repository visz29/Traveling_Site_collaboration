import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-amber-500 text-5xl p-4 w-5'>Hello World</h1>
    </>
  )
}

export default App
