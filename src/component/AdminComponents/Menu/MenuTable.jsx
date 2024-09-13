import { Create, Delete } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteFoodAction, getMenuItemByRestaurantId, updateMenuItemAvailability } from '../../../state/menu/Action';


const MenuTable = () => {

    const dispatch = useDispatch();
    const { restaurant, menu } = useSelector(store => store);
    const jwt = localStorage.getItem("jwt");

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMenuItemByRestaurantId({
            restaurantId: restaurant.userRestaurant.id,
            jwt: jwt,
            vegetarian: false,
            seasonal: true,
            nonVeg: false
        }));
    }, []);

    const handleUpdateAvailability = (id) => {
        dispatch(updateMenuItemAvailability({ foodId: id, jwt: jwt }));
    }

    const handleDeleteItem = (id) => {
        dispatch(deleteFoodAction({ foodId: id, jwt: jwt }));
    }

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={() => navigate("/admin/restaurant/add-menu")} aria-label='settings'>
                            <Create />
                        </IconButton>
                    }
                    title={"Menu"}
                    sx={{ paddingTop: 2, alignItems: "center", marginTop: 1 }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">ID</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Availability</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menu.menuItems.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{item.id}</TableCell>
                                    <TableCell align="left"><Avatar src={item.images[0]}></Avatar></TableCell>
                                    <TableCell align="right">{item.name}</TableCell>
                                    <TableCell align="right">{item.ingredients.map((ingredient) => <Chip label={ingredient.name} />)}</TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">
                                        {
                                            <Button
                                                onClick={() => handleUpdateAvailability(item.id)}
                                                color={item.available ? 'green' : 'error'}
                                                variant='contained'
                                                className='text-white p-2 rounded-md'
                                            >
                                                {item.available ? "available" : "not available"}
                                            </Button>
                                        }
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton color='primary' onClick={() => handleDeleteItem(item.id)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>


        </Box>
    )
}

export default MenuTable