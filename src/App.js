import React from 'react'
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
  return (
      <BrowserRouter>
       write "/register" on the task bar to start 
        <Routes>
            <Route path='/login' exact element={<Login />}/>
            <Route path='/register' exact element={<Register />}/>
            <Route path='/dashboard' exact element={<Dashboard />}/>
        </Routes>
        
      </BrowserRouter>
    
  )
}

export default App
