/* eslint-disable jsx-a11y/anchor-has-content */

import CartWidget from "../CartWidget";



function Nav () {
return (
<nav className="nav">
    <a href="#start">
       <img src="/img/logoatom.png" alt="logo atom" className="nav_logo"></img>
    </a>
    <ul className="nav_menu">
      <li>
        <a href="logo" alt="logo whislist">  
           <img src="/img/whislisticon.png" alt="logo whislist" className="nav_whislist"></img>
        </a> 
        </li>
      <li className="nav__item">
        <a href="#home" className="nav_link">
            Home
        </a>
      </li>
      <li className="nav__item">
        <a href="#about" className="nav_link">
            About
        </a>
      </li>
      <li className="nav__item">
        <a href="#users" className="nav_link">
            Users
        </a>
      </li>
    </ul>
    <a href="#start">
       <CartWidget />
    </a>
</nav>

)}

export default Nav;
