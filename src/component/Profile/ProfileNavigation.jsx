import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../state/authentication/ActionType';
import { logout } from '../../state/authentication/Action';

const menu = [
    {
        title: "Orders",
        icon: <ShoppingBagIcon />
    },
    {
        title: "Favorites",
        icon: <FavoriteIcon />
    },
    {
        title: "Address",
        icon: <HomeIcon />
    },
    {
        title: "Payment",
        icon: <PaymentIcon />
    },
    {
        title: "Notification",
        icon: <NotificationsActiveIcon />
    },
    {
        title: "Events",
        icon: <EventIcon />
    },
    {
        title: "Logout",
        icon: <LogoutIcon />
    },
]

const ProfileNavigation = ({ open, handleClose }) => {

    const dispatch = useDispatch();
    const isSmallScreen = useMediaQuery("(max-width:900px)");

    const navigate = useNavigate();

    const handleNavigate = (item) => {
        switch (item.title) {
            case "Logout":
                dispatch(logout());
                navigate("/");
                break;
            case "Favorites":
                navigate("/my-profile/favorites");
                break;
            case "Address":
                navigate("/my-profile/address");
                break;
            case "Orders":
                navigate("/my-profile/orders");
                break;
            case "Events":
                navigate("/my-profile/events");
                break;

        }
    }

    return (
        <div>
            <Drawer variant={isSmallScreen ? "temporary" : "permanent"} onClose={handleClose} open={open} anchor='left' sx={{ zIndex: 1 }}>
                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
                    {menu.map((item, index) => (
                        <>
                            <div onClick={() => handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {index !== menu.length - 1 && <Divider />}
                        </>
                    )
                    )}
                </div>
            </Drawer>
        </div>
    )
}

export default ProfileNavigation