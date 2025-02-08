import './App.css'
import { Welcome } from './pages/Welcome'
import { Home } from './pages/Home'
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Register } from "./pages/Register"
import { SignIn } from "./pages/SignIn"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
    </>
  )
}

export default App
