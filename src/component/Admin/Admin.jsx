import React, { useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../AdminComponents/Dashboard/Dashboard'
import Orders from '../AdminComponents/Orders/Orders'
import Menu from '../AdminComponents/Menu/Menu'
import FoodCategory from '../AdminComponents/FoodCategory/FoodCategory'
import Ingredients from '../AdminComponents/Ingredients/Ingredients'
import Events from '../AdminComponents/Events/Events'
import RestaurantDetails from './RestaurantDetails'
import CreateMenuForm from '../AdminComponents/Menu/MenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById, getRestaurantsCategory } from '../../state/restaurant/Action'
import { getMenuItemByRestaurantId } from '../../state/menu/Action'
import { fetchRestaurantsOrder } from '../../state/restaurantOrder/Action'

const Admin = () => {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector(store => store);


  const handleClose = () => {

  }

  useEffect(() => {
    dispatch(getRestaurantsCategory({ jwt, restaurantId: restaurant.userRestaurant?.id }));
    dispatch(fetchRestaurantsOrder({ jwt, restaurantId: restaurant.userRestaurant?.id }));

  }, []);


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
            <Route path='add-menu' element={<CreateMenuForm />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Admin