import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from './components/auth/Layout'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
   <Routes>
    <Route path="/auth" element={<AuthLayout />}>
     <Route path="signup" element={<Signup />} />
     <Route path="signin" element={<Signin />} />
    </Route>
   </Routes>

  </div>
  )
}

export default App
