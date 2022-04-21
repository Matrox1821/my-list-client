import React, { FC, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Logo.svg";
import "./Header.css";
const LogoComponent = () => {
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
                        {Items.map((item) => {
                            return (
                                <li className="item mobile">
                                    <Link className="link" to={item.rute}>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </Fragment>
            ) : (
                <ul className="menu-desktop">
                    {Items.map((item) => {
                        return (
                            <li className="item desktop">
                                <Link to={item.rute}>{item.name}</Link>
                            </li>
                        );
                    })}
                </ul>
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
