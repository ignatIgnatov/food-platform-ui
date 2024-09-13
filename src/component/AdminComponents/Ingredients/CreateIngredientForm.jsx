import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createIngredient } from '../../../state/ingredients/Action';

const CreateIngredientForm = ({ setOpen }) => {

    const dispatch = useDispatch();
    const { restaurant, ingredients } = useSelector(store => store);
    const jwt = localStorage.getItem("jwt");
    const [formData, setFormData] = useState({ name: "", ingredientCategoryId: [] })

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: formData.name,
            restaurantId: restaurant.userRestaurant.id,
            categoryId: formData.ingredientCategoryId
        }

        dispatch(createIngredient({ data, jwt }));
        setOpen(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient</h1>
            </div>
            <form
                className='space-y-4 flex flex-col items-center'
                onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    id='name'
                    name='name'
                    label="Ingredient Name"
                    variant='outlined'
                    onChange={handleInputChange}
                    value={formData.categoryName}
                >
                </TextField>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.ingredientCategoryId}
                        label="Category"
                        name='ingredientCategoryId'
                        onChange={handleInputChange}
                    >
                        {
                            ingredients.category.map((item) => (
                                <MenuItem value={item.id}>{item.name}</MenuItem>
                            ))
                        }

                    </Select>
                </FormControl>

                <Button

                    variant='contained'
                    type='submit'
                >
                    Create Ingredient
                </Button>
            </form>
        </div>
    )
}

export default CreateIngredientForm