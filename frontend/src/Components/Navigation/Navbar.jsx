import React, { cloneElement, useState } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  Toolbar,
  useScrollTrigger,
  useMediaQuery
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import SortIcon from "@mui/icons-material/Sort";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import Logo from '../../assets/main_logo.png'
import Logo2 from '../../assets/logo_white.png'
import navLinks from './NavLinks'

const ElevationScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 10 : 0,
  });
};
// Function to create a button that is custom styled
const LinkBtn = styled(Button)(({ theme }) => ({
  ":hover": {
    backgroundColor: alpha(
      theme.palette.action.hover,
      theme.palette.action.hoverOpacity
    ),
  },
}));
// Defining the default function to render the NavBar
function NavBar(props) {
  const { window } = props;
  // Defining the state to open/close the drawer on being prompted
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme()
  // Defining the media queries
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
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
  //
  const renderSmallScreenNavbar = () => (
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
        <img src={Logo} alt="Logo" style={{ height: '40px' }} />
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
  
  // Slicing through the array to display the first two navitems
  const initNavLinks = navLinks.slice(0, 3)
  // Slicing through the array to display the rest of the navitems
  const remNavLinks = navLinks.slice(3)
  const renderLargeScreenNavbar = () => (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Box>
          {initNavLinks.map((link) => (
            <LinkBtn
              color='inherit'
              key={link.title}
              component={HashLink}
              smooth
              to={link.path}>
              {link.title}
            </LinkBtn>
          ))}
        </Box>
        <Link
              component={HashLink}
              smooth='true'
              to='/#Home'>
              <img src={Logo} alt="Logo" style={{ height: '75px' }} />
        </Link>
        <Box>
          {remNavLinks.map((link) => (
            <LinkBtn
              color='inherit'
              key={link.title}
              component={HashLink}
              smooth
              to={link.path}>
              {link.title}
            </LinkBtn>
          ))}
        </Box>
      </Box>
    </>
  )
  
  return (
    <Container>
      <ElevationScroll {...props}>
        <AppBar color="background">
          <Toolbar>
            <Container>
              {isSmallScreen ? renderSmallScreenNavbar() : renderLargeScreenNavbar()}
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      
    </Container>
  );
}
NavBar.propTypes = {
  window: PropTypes.func,
};
export default NavBar;
