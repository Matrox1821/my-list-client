import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.svg";
import "./HeaderComponent.css";
type Props = {};

const LogoComponent = (props: Props) => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            {/* <Link to="/">
                <span>MyList</span>
            </Link> */}
        </div>
    );
};
const NavComponent = () => {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/my-list">My List</Link>
                </li>
                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>
            </ul>
        </nav>
    );
};

export const HeaderComponent = () => {
    return (
        <header>
            <LogoComponent />
            <NavComponent />
        </header>
    );
};
