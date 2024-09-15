import { Dashboard, ShoppingBag } from '@mui/icons-material'
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../state/authentication/Action';

const menu = [
    {
        title: "Dashboard",
        icon: <Dashboard />,
        path: "/"
    },
    {
        title: "Orders",
        icon: <ShoppingBag />,
        path: "/orders"
    },
    {
        title: "Menu",
        icon: <ShopTwoIcon />,
        path: "/menu"
    },
    {
        title: "Food Category",
        icon: <CategoryIcon />,
        path: "/category"
    },
    {
        title: "Ingredients",
        icon: <FastfoodIcon />,
        path: "/ingredients"
    },
    {
        title: "Event",
        icon: <EventIcon />,
        path: "/events"
    },
    {
        title: "Details",
        icon: <AdminPanelSettingsIcon />,
        path: "/details"
    },
    {
        title: "Logout",
        icon: <LogoutIcon />,
        path: "/"
    }
]

const AdminSidebar = ({ handleClose }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isSmallScreen = useMediaQuery('(max-width:1080px)')

    const handleNavigate = (item) => {
        navigate(`/admin/restaurant${item.path}`);
        if (item.title === 'Logout') {
            dispatch(logout());
            navigate('/');
            handleClose();
        }
    }
    return (
        <div>
            <div>
                <Drawer
                    variant={isSmallScreen ? 'temporary' : 'permanent'}
                    onClose={handleClose}
                    open={true}
                    anchor='left'
                    sx={{ zIndex: 1 }}
                >

                    <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>
                        {
                            menu.map((item) =>
                                <>
                                    <div
                                        onClick={() => handleNavigate(item)}
                                        className='px-5 items-center flex gap-5 cursor-pointer'
                                        key={item.title}
                                    >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </div>
                                    {item.title !== "Logout" && <Divider />}
                                </>
                            )
                        }
                    </div>

                </Drawer>
            </div>
        </div>
    )
}

export default AdminSidebar