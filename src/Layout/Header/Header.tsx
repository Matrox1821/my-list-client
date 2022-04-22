import React, { FC, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.svg";
import "./Header.css";
const LogoComponent = () => {
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
const NavComponent = () => {
    const Items = [
        { name: "Home", rute: "/" },
        { name: "My List", rute: "/my-list" },
        { name: "Catalog", rute: "catalog" },
    ];
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const MobileSize = width <= 960;
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
    const MenuItems = Items.map((item) => {
        return (
            <li
                className={`item ${MobileSize ? "mobile" : "desktop"}`}
                onClick={MenuState}
            >
                <Link className="link" to={item.rute}>
                    <div>{item.name}</div>
                </Link>
            </li>
        );
    });
    return (
        <nav>
            {MobileSize ? (
                <Fragment>
                    <button
                        className={openMenu ? "menu-icon active" : "menu-icon"}
                        type="button"
                        onClick={MenuState}
                    >
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </button>
                    <ul
                        className={
                            openMenu ? "menu-moblie active" : "menu-moblie"
                        }
                    >
                        {MenuItems}
                    </ul>
                </Fragment>
            ) : (
                <ul className="menu-desktop">{MenuItems}</ul>
            )}
        </nav>
    );
};

export const Header: FC = () => {
    return (
        <header>
            <LogoComponent />
            <NavComponent />
        </header>
    );
};
