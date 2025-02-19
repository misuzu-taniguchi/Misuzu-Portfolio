import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
    return (
        <div className="header">
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#introduction">About</Link></li>
                    <li><Link to="#projects">Projects</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>
        </div >
    );
}



export default Header;