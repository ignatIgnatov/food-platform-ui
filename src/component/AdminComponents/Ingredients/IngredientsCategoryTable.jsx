import { Create } from '@mui/icons-material'
import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreateIngredientCategoryForm from './CreateIngredientCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientCategory } from '../../../state/ingredients/Action';

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

const IngredientsCategoryTable = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { restaurant, ingredients } = useSelector(store => store);
    const dispatch = useDispatch();
    const token = localStorage.getItem("jwt");

    useEffect(() => {
        dispatch(getIngredientCategory({ id: restaurant.userRestaurant?.id, jwt: token }));
    }, []);

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
                            <CreateIngredientCategoryForm setOpen={setOpen} />
                        </Box>
                    </Modal>

                    <CardHeader
                        action={
                            <IconButton onClick={handleOpen} aria-label='settings'>
                                <Create />
                            </IconButton>
                        }
                        title={"Ingredient Category"}
                        sx={{ paddingTop: 2, alignItems: "center", marginTop: 1 }} />

                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ingredients.category.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell align="left">{row.id}</TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
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

export default IngredientsCategoryTable