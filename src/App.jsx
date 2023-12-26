import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import SignIn from './Pages/SIgnIn'
import SignUp from './Pages/SignUp'
import Header from './Components/Header'
import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Pages/Dashboard'
import ProfileDetails from './Pages/ProfileDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Making the profile private */}
      <Route element={<PrivateRoute/>}>
         <Route path="/profile" element={<Profile />} />
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/profiledetails" element={<ProfileDetails/>}/>
         
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App