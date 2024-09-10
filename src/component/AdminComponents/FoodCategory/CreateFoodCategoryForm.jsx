import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateFoodCategoryForm = () => {


    const [formData, setFormData] = useState({ categoryName: "", restaurantId: "" })

    const handleSubmit = () => {
        const data = {
            name: formData.categoryName,
            restaurantId: {
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
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Food Category</h1>
            </div>
            <form
                className='space-y-4 flex flex-col items-center'
                onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    id='categoryName'
                    name='categoryName'
                    label="Food Category"
                    variant='outlined'
                    onChange={handleInputChange}
                    value={formData.categoryName}
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

export default CreateFoodCategoryForm