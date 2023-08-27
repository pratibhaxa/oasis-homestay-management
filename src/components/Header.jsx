// import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { 
    AppBar, 
    Avatar, 
    Box, 
    Button, 
    Container, 
    IconButton, 
    Menu, 
    MenuItem, 
    Toolbar, 
    Tooltip, 
    Typography 
} from "@mui/material"
import React, { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        // console.log(auth?.currentUser?.email)
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = async () => {
        try {
            await signOut(auth);
            // <Navigate to="/auth/login" />
            navigate('/auth/login');
            // history.push ('./auth/login');
            // window.open("http://localhost:3000/auth/login",'_self');
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <AppBar position="fixed" sx={{ background: 'teal', position: 'fixed', top: 0 , left : 0,  margin: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <HomeIcon
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1
                        }}
                    /> */}
                    <Typography
                        variant="h6"
                        noWrap = 'true'
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontSize: '0.5cm',
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        StayEye
                    </Typography>
                    <Box
                        sx={{ 
                            flexGrow: 1, 
                            display: { xs: 'flex', md: 'none' } 
                        }}
                    >
                        <IconButton
                            size="large"
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link to='/addproperty' sx={{textDecoration: 'none'}}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Add Property</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/viewproperty'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">View Property</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Typography
                        variant='h5'
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontSize: '0.38cm',
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        StayEye
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        <Link to='/addproperty'>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Add Property
                            </Button>
                        </Link>
                        <Link to='/viewproperty'>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                View Property
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        sx={{ flexGrow: 0 }}
                    >
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                                <Avatar alt="User Image" src=""/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Typography>
                                &nbsp; Hi, {auth?.currentUser?.email} &nbsp;
                            </Typography> 
                            <Typography align='center'>
                                <Button onClick={logout}>Logout</Button>
                            </Typography>
                            
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}