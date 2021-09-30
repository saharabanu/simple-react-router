import React from 'react';
import { Link as NavLink } from 'react-router-dom';


const Header = () => {
   
    
    
    return (
        <nav >
            <NavLink  to ="/home" >Home</NavLink>
            <NavLink className="nav"  to ="/friends"  >Friends</NavLink>
            <NavLink className="nav" to ="/about" >About</NavLink>
            <NavLink className="nav" to ="/about/culture" >Culture</NavLink>
        </nav>
    );
};

export default Header;