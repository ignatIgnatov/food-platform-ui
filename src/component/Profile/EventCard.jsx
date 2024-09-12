import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
    return (
        <div>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 345 }}
                    image='https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=is&k=20&c=c0vLpEaaRRJD02xoNA91ColeRjj8433u415h5xEusUo='
                />

                <CardContent>
                    <Typography variant='h5'>
                        Bulgarian Fast Food
                    </Typography>
                    <Typography variant='body'>
                        50% off on your first order
                    </Typography>
                    <div className='py-2 space-y-2'>
                        <p>Rousse</p>
                        <p className='text-sm text-blue-500'>01.08.2024 - 31.08.2024</p>
                    </div>
                </CardContent>
                {true && <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>}
            </Card>
        </div>
    )
}

export default EventCard