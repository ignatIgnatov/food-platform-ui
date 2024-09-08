import { Create } from '@mui/icons-material'
import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const orders = [1, 1, 1];

const IngredientsTable = () => {
    return (
        <div>
            <Box>
                <Card className='mt-1'>
                    <CardHeader
                        action={
                            <IconButton aria-label='settings'>
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
                                {orders.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell align="left">{1}</TableCell>
                                        <TableCell align="left">{"name"}</TableCell>
                                        <TableCell align="left">{"category"}</TableCell>
                                        <TableCell align="left">{"availability"}</TableCell>
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