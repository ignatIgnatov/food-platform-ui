import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = ({ item }) => {
    return (
        <Card className='flex justify-between items-center p-5'>
            {
                item?.items.map((menuItem => (
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex items-center space-x-5'>
                            <img
                                className='h-16 w-16 object-cover'
                                src={menuItem.food?.images[0]} />
                        </div>
                        <div>
                            <p>{menuItem?.food?.name}</p>
                        </div>
                    </div>
                )))
            }
            <div>
                <p>${item?.totalPrice}</p>
            </div>
            <Button disabled className='cursor-not-allowed'>{item?.orderStatus}</Button>
        </Card>
    )
}

export default OrderCard