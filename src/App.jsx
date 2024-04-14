import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Courses from "./components/courses"
import Home from "./components/home"
import Mentor from "./components/mentor"
import About from "./components/about"
import Career from "./components/career"
import Tests from "./components/tests"
import Jobs from "./components/jobs"
import Champions_portal from "./components/champions_portal"

import './App.css'
const App = () => {
  return (
    <>
      <header className="auth-login">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/champions_portal" element={<Champions_portal/>}/>
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </BrowserRouter>
      </header>
    </>
  )
}


export default App;