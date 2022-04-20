import React, { FC, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.svg";
import { StyledHeader, StyledLogo, StyledNav } from "./HeaderStyles";
import { MenuIconStyled } from "./MenuIcon/MenuIcon";
const LogoComponent = () => {
    return (
        <StyledLogo>
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            {/* <Link to="/">
                <span>MyList</span>
            </Link> */}
        </StyledLogo>
    );
};
const NavComponent = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const MenuState = () => {
        setOpenMenu(!openMenu);
    };
    const changeWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", changeWidth);
        /* showMobileMenu(); */
        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    });
    return (
        <StyledNav size={width} menu={openMenu}>
            <ul>
                <li className="option">
                    <Link to="/">Home</Link>
                </li>
                <li className="option">
                    <Link to="/my-list">My List</Link>
                </li>
                <li className="option">
                    <Link to="/catalog">Catalog</Link>
                </li>
            </ul>
            <div onClick={MenuState}>
                <MenuIconStyled />
            </div>
        </StyledNav>
    );
};

export const Header: FC = () => {
    return (
        <StyledHeader>
            <LogoComponent />
            <NavComponent />
        </StyledHeader>
    );
};
