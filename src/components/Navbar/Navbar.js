import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoImage from './intmedicaa.jpg'


export default function Navbar(){
    const [userIsSignedIn, setUserIsSignedIn] = useState(false);
    return(
    <div>
        <nav>
            <img id="logoInNav" src={logoImage} alt="logo" />
            {/* {user.username ? <p id="pSigninHi">Hello {user.username} !</p>: null }  */}
            <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
            <li><NavLink to="/yourcart" activeClassName="active">Your Cart</NavLink></li>
            <li><NavLink to="/contactus" activeClassName="active">Contact US</NavLink></li>

            {/* signin BUTTON TOGGLE. */}
            {/* Ternary for Sign In/Log Out - turns to Log Out if user is signed in, else turns to Sign In. */}
            <li><NavLink to="/signin" activeClassName="active">{userIsSignedIn ? "Log Out" : "Sign In"}</NavLink></li> 

            {/* USER GREETING TOGGLE */}
            {/* Ternary for HI Expression - turns to nothing if user is logged out. */}
            {/* If the greeting is custom for a user's name, then the user's name needs to be tracked as state. */}
            {/* ADD SOME CODE HERE! */}

            </ul>
         </nav>
    </div>
    )
}