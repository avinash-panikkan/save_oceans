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
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path='home' element={<Home/>}/>
          <Route path='survey' element={<Survey/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App