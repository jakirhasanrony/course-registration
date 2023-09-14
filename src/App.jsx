import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'


function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl	font-bold	text-center mx-auto my-12'>Course Registration</h1>
      <Home></Home>
    </>
  )
}

export default App
