import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../component/AdminComponents/CreateRestaurantForm/CreateRestaurantForm'
import Admin from '../component/Admin/Admin'
import { useSelector } from 'react-redux'

const AdminRouter = () => {

    const { restaurant } = useSelector(store => store);

    return (
        <Routes>
            <Route path='/*' element={!restaurant.userRestaurant ? <CreateRestaurantForm /> : <Admin />} />
        </Routes>
    )
}

export default AdminRouter