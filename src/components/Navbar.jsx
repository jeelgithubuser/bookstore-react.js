import React, { useContext } from 'react'
import './navbar.css'
// import MenuIcon from '@mui/icons-material/Menu';
// import Logo from './images/books.png';
import {IconButton, Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
// import Cookies from 'js-cookie';
import { AuthContext } from '../context/authContext';
// import menu from './Menu';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const signOut = useContext(AuthContext);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const logout = () => {
        signOut.signOut()
    }


    const auth = useContext(AuthContext);

    return (

        <div>
            <nav>
                <div >
                    <ul id='navbar'>
                        {/* {auth.user.email && (
                            <li>
                                <a href="/HomePage">
                                    Home
                                </a>
                            </li>)} */}
                        {auth.user.email && (
                            <li>
                                <a href="/Books">
                                    Books
                                </a>
                            </li>)}



                    </ul>
                </div>
                <div id='navhead'>
                    <h2>library</h2>
                </div>
                <div id='navbar-blocks'>
                    <ul id="navbar">
                        {auth.user.email && (
                            <li>
                                <a href="/Cart">
                                    <IconButton
                                        aria-label="Cart"
                                        size="large"
                                        sx={{ color: "white" }}
                                    >
                                        <ShoppingCartIcon sx={{ fontSize: 35 }} />
                                    </IconButton>
                                </a>
                            </li>)}

                            
                            
                
                                {auth.user.email && (
                            <li>
                                <a href="/UserProfile">
                                    
                                    <IconButton
                                        aria-label="Profile"
                                        size="large"
                                    >
                                        PROFILE
                                    </IconButton>
                                </a>
                            </li>)}


                                
                                {auth.user.email && (
                            <li>
                                <a href="/">
                                    
                                    <IconButton
                                        aria-label="LogOut"
                                        size="large"
                                       
                                        onClick={logout}
                                    >
                                        LOGOUT
                                    </IconButton>
                                </a>
                                </li>)}



                                
                                {auth.user.email && (
                            <li>
                                <a href="/About">
                                    
                                    <IconButton
                                        aria-label="About"
                                        size="large"
                            
                                    >
                                        ABOUT US
                                    </IconButton>
                                </a>
                                </li>)} 
                        


                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Navbar