import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../component/Home/Home"
import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'
import Navbar from '../component/navbar/Navbar'

const CustomerRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account/:register' element={<Home />} />
                <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/my-profile/*' element={<Profile />} />
            </Routes>
        </div>
    )
}

export default CustomerRouter