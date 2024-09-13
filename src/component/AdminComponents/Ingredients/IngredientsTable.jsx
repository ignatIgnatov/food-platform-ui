import { Create } from '@mui/icons-material'
import { Box, Button, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIngredientForm from './CreateIngredientForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientOfRestaurant, updateStockOfIngredient } from '../../../state/ingredients/Action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const IngredientsTable = () => {

    const dispatch = useDispatch();
    const { restaurant, ingredients } = useSelector(store => store);
    const jwt = localStorage.getItem("jwt");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(getIngredientOfRestaurant({ id: restaurant.userRestaurant.id, jwt: jwt }))
    }, []);

    const handleUpdateAvailability = (id) => {
        dispatch(updateStockOfIngredient({ id, jwt }));
    }

    return (
        <div>
            <Box>
                <Card className='mt-1'>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <CreateIngredientForm setOpen={setOpen} />
                        </Box>
                    </Modal>

                    <CardHeader
                        action={
                            <IconButton onClick={handleOpen} aria-label='settings'>
                                <Create />
                            </IconButton>
                        }
                        title={"Ingredients"}
                        sx={{ paddingTop: 2, alignItems: "center", marginTop: 1 }} />

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Category</TableCell>
                                    <TableCell align="left">Availability</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ingredients.ingredients.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell align="left">{row.id}</TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.category.name}</TableCell>
                                        <TableCell align="left">
                                            <Button
                                                onClick={() => handleUpdateAvailability(row.id)}
                                                color={row.inStoke ? 'green' : 'error'}
                                                variant='contained'
                                                className='text-white p-2 rounded-md'
                                            >
                                                {row.inStoke ? "available" : "not available"}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>


            </Box>
        </div>
    )
}

export default IngredientsTable