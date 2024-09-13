import { AddPhotoAlternate, Close } from '@mui/icons-material';
import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { uploadImageToCloudinary } from '../../../util/uploadToCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import { createMenuItem } from '../../../state/menu/Action';
import { getIngredientOfRestaurant } from '../../../state/ingredients/Action';

const initialValue = {
    name: "",
    description: "",
    price: "",
    foodCategory: "",
    restaurantId: "",
    vegetarian: true,
    seasonal: false,
    ingredientsItems: [],
    images: []
}

const CreateMenuForm = () => {

    const dispatch = useDispatch()
    const { restaurant, ingredients } = useSelector(store => store);
    const jwt = localStorage.getItem("jwt");

    const [uploadImage, setUploadImage] = useState(false);
    const formik = useFormik(
        {
            initialValues: initialValue,
            onSubmit: (values) => {
                values.restaurantId = restaurant.userRestaurant.id;
                
                dispatch(createMenuItem({ req: values, jwt }));
            }
        }
    );

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        setUploadImage(true);
        const image = await uploadImageToCloudinary(file);
        formik.setFieldValue("images", [...formik.values.images, image]);
        setUploadImage(false);
    }

    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images];
        updatedImages.splice(index, 1);
        formik.setFieldValue('images', updatedImages);
    }

    useEffect(() => {
        dispatch(getIngredientOfRestaurant({ id: restaurant.userRestaurant.id, jwt: jwt }))
    }, []);


    return (
        <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
            <div className='lg:max-w-4xl'>
                <div>
                    <h1 className='font-bold text-2xl text-center py-2'>Add New Menu Item</h1>
                </div>
                <form onSubmit={formik.handleSubmit} className='space-y-4'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} className='flex flex-wrap gap-5'>

                            <input
                                type='file'
                                accept='image/*'
                                id='fileInput'
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                            />

                            <label className='relative' htmlFor='fileInput'>
                                <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                                    <AddPhotoAlternate className='text-white' />
                                </span>
                                {
                                    uploadImage && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center' >
                                        <CircularProgress />
                                    </div>
                                }
                            </label>

                            <div className='flex flex-wrap gap-2'>
                                {
                                    formik.values.images.map((image, index) =>
                                        <div className='relative'>
                                            <img
                                                key={index}
                                                className='w-24 h-24 object-cover'
                                                src={image}
                                                alt="" />
                                            <IconButton
                                                size='small'
                                                sx={{ position: "absolute", top: 0, right: 0, outline: "none" }}
                                                onClick={() => handleRemoveImage(index)}>
                                                <Close sx={{ fontSize: "1rem" }} />
                                            </IconButton>
                                        </div>)
                                }
                            </div>

                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id='name'
                                name='name'
                                label="Name"
                                variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            >

                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id='description'
                                name='description'
                                label="Description"
                                variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            >

                            </TextField>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <TextField
                                fullWidth
                                id='price'
                                name='price'
                                label="Price"
                                variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            >

                            </TextField>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.foodCategory}
                                    label="Category"
                                    name='foodCategory'
                                    onChange={formik.handleChange}
                                >
                                    {
                                        restaurant.categories.map((item) => (
                                            <MenuItem value={item}>{item.name}</MenuItem>
                                        ))
                                    }

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">Ingredients</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    name='ingredientsItems'
                                    multiple
                                    value={formik.values.ingredientsItems}
                                    onChange={formik.handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((item) => (
                                                <Chip key={item.id} label={item.name} />
                                            ))}
                                        </Box>
                                    )}

                                >
                                    {
                                        ingredients.ingredients?.map((item, index) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item}

                                            >
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Is Vegetarian</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.vegetarian}
                                    label="Is Vegetarian"
                                    name='vegetarian'
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Is Seasonal</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.seasonal}
                                    label="Is Seasonal"
                                    name='seasonal'
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Create Menu Item
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateMenuForm