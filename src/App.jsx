import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Products from './Screens/Products'
import SingIn from './LoginAndSingup/SingIn/SingIn'
import SingUp from './LoginAndSingup/SingUp/SingUp'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="product/:id" element={<Products />} />
        <Route path='/'element={<SingIn/>}/>
        <Route path='Singup'element={<SingUp  />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App