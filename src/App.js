import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <Navbar /> */}
        {/* <Home /> */}
        {/* <RestaurantDetails /> */}
        {/* <Cart /> */}
        {/* <Profile /> */}
        <CustomerRouter />
      </ThemeProvider>

    </div>
  );
}

export default App;
