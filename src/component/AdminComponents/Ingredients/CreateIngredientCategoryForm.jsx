import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createIngredientCategory } from '../../../state/ingredients/Action';

const CreateIngredientCategoryForm = ({ setOpen }) => {

    const dispatch = useDispatch();
    const { restaurant } = useSelector(store => store);
    const jwt = localStorage.getItem("jwt");
    const [formData, setFormData] = useState({ name: "" })

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: formData.name,
            restaurantId: restaurant.userRestaurant?.id
        }

        dispatch(createIngredientCategory({ data, jwt }));
        setOpen(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient Category</h1>
            </div>
            <form
                className='space-y-4 flex flex-col items-center'
                onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    id='name'
                    name='name'
                    label="Category"
                    variant='outlined'
                    onChange={handleInputChange}
                    value={formData.name}
                >
                </TextField>

                <Button

                    variant='contained'
                    type='submit'
                >
                    Create Category
                </Button>
            </form>
        </div>
    )
}

export default CreateIngredientCategoryForm