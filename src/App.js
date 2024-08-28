
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import CustomerRouter from './Routers/CustomerRouter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './state/authentication/Action';
import { store } from './state/store';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))
  }, [auth.jwt])

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <CustomerRouter />
      </ThemeProvider>

    </div>
  );
}

export default App;
