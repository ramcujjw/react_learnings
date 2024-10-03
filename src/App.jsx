import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Components/Home'
//import Add  from './Components/Add'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <About/>
             <Routes>
        <Route path='/' element={<Home/>}></Route>
       {/* <Route path='/add' element={<Add/>}></Route> */}
       </Routes>
    
      {/* <Home/>
      <Add/> */}

    </>
  )
}

export default App
