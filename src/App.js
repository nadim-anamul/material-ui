import Navbar from './components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Grid container >
        <Navbar></Navbar>
        <Outlet></Outlet>
      </Grid>
    </>
  );
}

export default App;
