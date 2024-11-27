import './App.css'
import Home from './pages/Home'
import Events from './pages/Events'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Events/>} />
      </Routes>
      

    </>
  )
}

export default App