import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';

function Header() {
  const [value, setValue] = useState();
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        {/* <Typography variant="h6">Hello Mui</Typography> */}
        <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
        <AppBar position="static" color="primary">
          <Tabs
            value={value}
            onChange={(e, value) => setValue(value)}
            aria-label="Nav bar"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
          </Tabs>
        </AppBar>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
