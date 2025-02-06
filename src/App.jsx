import './App.css'
import { Home } from './pages/Home'
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Register } from "./pages/Register"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
