import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/Logo.svg";

export const LogoMenu = () => {
    return (
        <figure className="logo">
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            {/* <Link to="/">
                <span>MyList</span>
            </Link> */}
        </figure>
    );
};
