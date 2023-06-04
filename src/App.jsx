import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Navbar.jsx'
import Hero from './Hero'
import Clicker from './Clicker.jsx'
import Display from './Display'

function App() {
  const [count, setCount] = useState(0)



  return (
  <>

  <Navbar />
  <Hero />
  <Display />

  </>
  )
}

export default App
