import { Button, Card, CardContent, CardHeader, Grid, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurantStatus } from '../../state/restaurant/Action';

const RestaurantDetails = () => {

  const dispatch = useDispatch();
  const { restaurant } = useSelector(store => store);
  const jwt = localStorage.getItem("jwt");

  const handleRestaurantStatus = () => {
    dispatch(updateRestaurantStatus({ restaurantId: restaurant?.userRestaurant?.id, jwt }))
  }

  return (
    <div className='lg:px-20 px-5'>
      <div className='py-5 flex justify-center items-center gap-5'>

        <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>{restaurant?.userRestaurant?.name}</h1>
        <Button
          color={restaurant?.userRestaurant?.open ? "error" : "green"}
          className='py-[1rem] px-[2rem]'
          variant='contained'
          onClick={handleRestaurantStatus}
          size='large'
        >
          {restaurant?.userRestaurant?.open ? "Set Close" : "Set Open"}
        </Button>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Restaurant</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Owner</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.owner?.fullName}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Restaurant Name</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.name}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Cuisine Type</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.cuisineType}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Opening Hours</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.openingHours}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Status</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {
                      restaurant?.userRestaurant?.open
                        ?
                        <span className='px-5 py-2 rounded-full bg-green-600 text-gray-950'>Open</span>
                        :
                        <span className='px-5 py-2 rounded-full bg-red-600 text-gray-950'>Close</span>
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Address</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200 pb-5'>
                <div className='flex'>
                  <p className='w-48'>Country</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.address?.country}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>City</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.address?.city}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Postal Code</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.address?.postalCode}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Street</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.address?.streetAddress}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Contact</span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Email</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.contactInformation?.email}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Mobile</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {restaurant?.userRestaurant?.contactInformation?.mobile}
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Social</p>
                  <div className='flex items-center pb-3 gap-4 text-gray-400'>
                    <span className='pr-5'>-</span>
                    <a href={restaurant?.userRestaurant?.contactInformation?.instagram}><InstagramIcon sx={{ fontSize: "2rem" }} /></a>
                    <a href={restaurant?.userRestaurant?.contactInformation?.twitter}><TwitterIcon sx={{ fontSize: "2rem" }} /></a>
                    <a href=''><LinkedInIcon sx={{ fontSize: "2rem" }} /></a>
                    <a href=''><FacebookIcon sx={{ fontSize: "2rem" }} /></a>
                  </div>
                </div>



              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default RestaurantDetails