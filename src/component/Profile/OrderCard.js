import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img
                    className='h-16 w-16 object-cover'
                    src='https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=is&k=20&c=Cp3EUWJ5DxsRrwCy_x_Ad-lQb_-9euAUfsOue_vKpxQ=' />
            </div>
            <div>
                <p>Burger</p>
                <p>$3</p>
            </div>
            <Button disabled className='cursor-not-allowed'>completed</Button>
        </Card>
    )
}

export default OrderCard