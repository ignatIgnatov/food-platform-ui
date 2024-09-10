import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientForm = () => {


    const [formData, setFormData] = useState({ name: "", ingredientCategoryId: [] })

    const handleSubmit = () => {
        const data = {
            name: formData.name,
            ingredientCategory: {
                id: 1
            }
        }
        console.log(data);

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
                    id='ingredient'
                    name='ingredient'
                    label="Ingredient"
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
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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