import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage/LoginPage"
import Homepage from "./Pages/HomePage/Homepage"
import SignUpPage from "./Pages/SignUpPage/SignUpPage"
import MessagingPage from "./Pages/MessagingPage/MessagingPage"
import GamingPage from "./Pages/GamingPage/GamingPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route exact path='/Messaging' element={<MessagingPage />} />
        <Route exact path='/Gaming' element={<GamingPage />} />
      </Routes>
    </Router>
  )
}

export default App
