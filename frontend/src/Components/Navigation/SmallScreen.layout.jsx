// Importing the required libraries
import React, { useState } from "react";
import { Box, Drawer, IconButton, List } from "@mui/material";
import Logo from '../../assets/main_logo.png'
import Logo2 from '../../assets/logo_white.png'
import NavItem from "./NavItem";
import navLinks from './NavLinks'
 
function renderSmallScreenNavbar(props) {
    const { window } = props
    const container = window !== undefined ? () => window().document.body : undefined
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {setOpen((prevState) => !prevState)};
    // Defining the drawer component
    const drawer = (
    <Box onClick={toggleDrawer} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
    }}>
      <img src={Logo2} alt="Logo" style={{ height: '60px' }} />
      <List>
        {navLinks.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
    );
    return (
    <>
      <IconButton
        color='inherit'
        aria-label='open-drawer'
        onClick={toggleDrawer}
        sx={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',}}>
        <img src={Logo} alt="Logo" style={{ height: '60px' }} />
      </IconButton>  
      <Box>
          <Drawer
            anchor='right'
            container={container}
            variant='temporary'
            open={open}
            onClose={toggleDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                overflow: "hidden",
                backgroundColor: theme.palette.primary.main,
                boxSizing: "border-box",
                width: "100%",
                display: "flex",
              },
            }}>
            {drawer}
          </Drawer>
        </Box>
      </>    
    )
}
export default renderSmallScreenNavbar