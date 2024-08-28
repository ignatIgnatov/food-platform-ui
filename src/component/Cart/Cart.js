import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';

const items = [1, 1];

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};

const validationSchema = yup.object({
    streetAddress: yup
        .string('Enter your street address')
        .required('Street address is required'),
    state: yup
        .string('Enter your state')
        .required('State is required'),
    pincode: yup
        .string('Enter your pincode')
        .required('Pincode is required'),
    city: yup
        .string('Enter your city')
        .required('City is required')
});

const Cart = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const formik = useFormik({
        initialValues: {
            streetAddress: "",
            state: "",
            pincode: "",
            city: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    const createOrderUsingSelectedAddress = () => {

    }

    const handleOpenAddressModal = () => {
        setOpen(true);
    }

    const handleSubmit = (values) => { console.log("form values", values); }

    return (
        <div>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {items.map((item) => <CartItem />)}
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total:</p>
                                <p>$30</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Delivery fee</p>
                                <p>$10</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST and Restaurant Charges</p>
                                <p>$30</p>
                            </div>
                            <Divider />
                        </div>
                        <div className='flex justify-between text-gray-400 py-4'>
                            <p>Total Pay:</p>
                            <p>$70</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1].map((item) => <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true} />)}

                            <Card className="flex gap-5 w-64 p-5">
                                <AddLocationAltIcon />
                                <div className='space-y-3 text-gray-500'>
                                    <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                    <Button variant='contained' fullWidth onClick={handleOpenAddressModal}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    margin='normal'
                                    variant='outlined'
                                    fullWidth
                                    id="streetAddress"
                                    name="streetAddress"
                                    label="Street Address"
                                    value={formik.values.streetAddress}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.streetAddress && Boolean(formik.errors.streetAddress)}
                                    helperText={formik.touched.streetAddress && formik.errors.streetAddress}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    margin='normal'
                                    variant='outlined'
                                    fullWidth
                                    id="state"
                                    name="state"
                                    label="State"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.state && Boolean(formik.errors.state)}
                                    helperText={formik.touched.state && formik.errors.state}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    margin='normal'
                                    variant='outlined'
                                    fullWidth
                                    id="pincode"
                                    name="pincode"
                                    label="Pincode"
                                    value={formik.values.pincode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                                    helperText={formik.touched.pincode && formik.errors.pincode}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    margin='normal'
                                    variant='outlined'
                                    fullWidth
                                    id="city"
                                    name="city"
                                    label="City"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                    helperText={formik.touched.city && formik.errors.city}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button fullWidth variant='contained' type='submit' color='primary'>
                                    Deliver Here
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default Cart