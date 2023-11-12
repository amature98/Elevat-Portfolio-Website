import React from "react";
import { alpha, styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import navLinks from "./NavLinks";
// Function to create a button that is custom styled
const LinkBtn = styled(Button)(({ theme }) => ({
  ":hover": {
    backgroundColor: alpha(
      theme.palette.action.hover,
      theme.palette.action.hoverOpacity
    ),
  },
}));

 function renderLargeScreenNavbar() {// Slicing through the array to display the first two navitems
  const initNavLinks = navLinks.slice(0, 3)
  // Slicing through the array to display the rest of the navitems
     const remNavLinks = navLinks.slice(3)
      return (
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
}
export default renderLargeScreenNavbar