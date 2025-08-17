import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
