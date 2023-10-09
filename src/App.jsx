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
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path='home' element={<Home/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App