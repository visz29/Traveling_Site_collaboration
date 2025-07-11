import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route path='' element={<Home/>} />
    {/* when we make other pages then add new Route for them */}
    </ Route>
))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className='text-amber-500 text-5xl p-4 w-5'>Hello World ok then</h1> */}
     <RouterProvider router={router}/>
    </>
  )
}

export default App
