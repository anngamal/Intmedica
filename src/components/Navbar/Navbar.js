import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoImage from './intmedicaa.jpg'

export default function Navbar(){
    return(
    <div>
        <nav>
            <img id="logoInNav" src={logoImage} alt="logo" />
            <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
            <li><NavLink to="/yourcart" activeClassName="active">Your Cart</NavLink></li>
            <li><NavLink to="/contactus" activeClassName="active">Contact US</NavLink></li>
            <li><NavLink to="/sign in" activeClassName="active">Sign In</NavLink></li>

            </ul>
         </nav>
    </div>
    )
}