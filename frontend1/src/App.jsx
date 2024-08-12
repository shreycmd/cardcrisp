
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Admin from './pages/Admin'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App