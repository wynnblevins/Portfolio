import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  IconButton, 
  Menu, 
  MenuItem, 
  Toolbar, 
  WithStyles, 
  withStyles 
} from '@material-ui/core';
import { userIsOnMobile } from '../../utils/mobileDetectionService';

const styles = {
  appBar: {
    backgroundColor: "#4aaaa5",
  },
}

interface NavbarProps extends WithStyles {}

const pages = ['Home', 'Demos'];

const NavbarBase = (props: NavbarProps) => {
  const { classes } = props;

  const [mobile, setMobile] = React.useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    const mobile = userIsOnMobile()
    setMobile(mobile);
  }, [])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl" className={classes.container}>
        <Toolbar disableGutters>
          { userIsOnMobile() ? (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              {/* This is the mobile toolbar interface */}
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link style={{ color: "black", textDecoration: "none" }} to={`${page}`}>{page}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>) : (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* This is the desktop browser toolbar interface */}
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Link style={{ color: "white", textDecoration: "none" }} to={`${page}`}>{page}</Link>
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const Navbar = withStyles(styles)(NavbarBase);
export { Navbar };