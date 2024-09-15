import { Edit } from '@mui/icons-material';
import { Avatar, Box, Card, CardHeader, Chip, IconButton, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantsOrder, updateOrderStatus } from '../../../state/restaurantOrder/Action';

const orderStatus = [
    { label: "Pending", value: "PENDING" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
    { label: "Delivered", value: "DELIVERED" }
]

const OrderTable = () => {

    const dispatch = useDispatch();
    const { restaurant, restaurantOrder } = useSelector(store => store);
    const jwt = localStorage.getItem("jwt");

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleUpdateStatus = (id, value) => {
        console.log(id);

        dispatch(updateOrderStatus({
            orderId: id, orderStatus: value, jwt: jwt
        }));
        handleClose();
    }

    useEffect(() => {
        dispatch(fetchRestaurantsOrder({
            jwt,
            restaurantId: restaurant.userRestaurant.id
        }));
    }, [])

    return (
        <Box>
            <Card>
                <CardHeader title={"All Orders"} sx={{ paddingTop: 2, alignItems: "center", marginTop: 1 }} />
            </Card>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Image</TableCell>
                            <TableCell align="left">Customer</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Ingredients</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="right">Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {restaurantOrder.orders.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.id}
                                </TableCell>
                                <TableCell align="right">
                                    <div className='flex flex-wrap justify-start items-center gap-2'>
                                        {item.items.map((image) => <Avatar src={image.food.images[0]} />)}
                                    </div>
                                </TableCell>
                                <TableCell align="left">{item.customer.fullName}</TableCell>
                                <TableCell align="left">{item.totalPrice}</TableCell>
                                <TableCell align="left">
                                    <div className='flex flex-wrap justify-start items-center gap-2'>
                                        {item.items.map((food) => <Chip label={food.food.name} />)}
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    <div className='flex flex-wrap justify-start items-center gap-2'>
                                        {item.items.map((food) => food.ingredients.map((i) => <Chip label={i} />))}
                                    </div>
                                </TableCell>
                                <TableCell align="left">{item.orderStatus}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={handleClick}><Edit /></IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        {
                                            orderStatus.map((status) => <MenuItem onClick={() => handleUpdateStatus(item.id, status.value)}>{status.label}</MenuItem>)
                                        }

                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default OrderTable