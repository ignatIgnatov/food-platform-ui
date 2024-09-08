import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const orders = [1, 1, 1, 1];

const OrderTable = () => {
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
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Customer</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Ingredients</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {1}
                                </TableCell>
                                <TableCell align="right">{"image"}</TableCell>
                                <TableCell align="right">{"customer"}</TableCell>
                                <TableCell align="right">{"price"}</TableCell>
                                <TableCell align="right">{"pizza"}</TableCell>
                                <TableCell align="right">{"ingredients"}</TableCell>
                                <TableCell align="right">{"completed"}</TableCell>
                                <TableCell align="right">{"UPDATE"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default OrderTable