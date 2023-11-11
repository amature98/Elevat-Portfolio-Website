// importing the needed libraries
import React from "react";
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import { ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

// creating an function to style up the navigation items in the list
const NavItemStyled = styled(ListItemButton)(({ theme }) => ({
  textAlign: "center",
  ":hover": {
    backgroundColor: alpha(
      theme.palette.action.hover,
      theme.palette.action.hoverOpacity
    ),
  },
}));

// Creating the default function
function NavItem({ item }) {
  const { title, path } = item;
  return (
    <ListItem>
      <NavItemStyled component={HashLink} smooth to={path}>
        <ListItemText>
          <Typography variant='body1' sx={{ color: '#ffffff'}}>
            {title}
          </Typography>
        </ListItemText>
      </NavItemStyled>
    </ListItem>
  );
}
NavItem.propTypes = {
  item: PropTypes.object,
};

export default NavItem;
