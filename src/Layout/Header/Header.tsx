import React from "react";
import Logo from "../../img/Logo.svg";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="logo" />
                <span>MyList</span>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>My List</li>
                    <li>Catalog</li>
                </ul>
            </nav>
        </header>
    );
};
