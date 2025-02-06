import './App.css'

import NavBar from "../src/common/NavBar";
import Landing from "../src/components/Landing";
import Features from './pages/Features';
import Footer from './common/Footer';
import About from "./pages/About";
import Contact  from './pages/Contact';

function App() {

  return (
    <>
      {/* <Home /> */}
      <NavBar/>
      <Landing/>
      <Features/>
      <Footer/>
      <About/>
      <Contact/>
      {/* <DisplayDestination/> */}
  
    </>
  )
}

export default App
