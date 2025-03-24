import React from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Dash from './Dash'
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw'
import Balance from './pages/Balance'
import Statement from './pages/Statement'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route path='registration' element = {<Registration/>}/>
      <Route path='login' element = {<Login/>}/>
      <Route path='home' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>

      </Route>
    </Routes>
    <Routes>
      <Route path='dash' element = {<Dash/>}>
      <Route path='deposit' element = {<Deposit/>}/>
      <Route path='withdraw' element = {<Withdraw/>}/>
      <Route path='balance' element = {<Balance/>}/>
      <Route path='statement' element={<Statement/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App