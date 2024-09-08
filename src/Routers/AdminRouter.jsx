import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../component/AdminComponents/CreateRestaurantForm/CreateRestaurantForm'
import Admin from '../component/Admin/Admin'

const AdminRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={false ? <CreateRestaurantForm /> : <Admin />} />
        </Routes>
    )
}

export default AdminRouter