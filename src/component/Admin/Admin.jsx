import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../AdminComponents/Dashboard/Dashboard'
import Orders from '../AdminComponents/Orders/Orders'
import Menu from '../AdminComponents/Menu/Menu'
import FoodCategory from '../AdminComponents/FoodCategory/FoodCategory'
import Ingredients from '../AdminComponents/Ingredients/Ingredients'
import Events from '../AdminComponents/Events/Events'
import RestaurantDetails from './RestaurantDetails'

const Admin = () => {

  const handleClose = () => {

  }

  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <AdminSidebar handleClose={handleClose} />
        </div>
        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/events' element={<Events />} />
            <Route path='/category' element={<FoodCategory />} />
            <Route path='/ingredients' element={<Ingredients />} />
            <Route path='/details' element={<RestaurantDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Admin