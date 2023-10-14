import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Survey from './pages/Survey';
import Research from './pages/Research';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path='home' element={<Home/>}/>
          <Route path='survey' element={<Survey/>}/>
          <Route path='research' element={<Research/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App