import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import { useDropdown } from "../../hooks/useDropdown";
import { useMenu } from "../../hooks/useMenu";
import { useSize } from "../../hooks/useSize";
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
type ItemsDropdownProps = {
    name: string;
    type: string;
    rute: string;
    click: () => void;
};
const ItemDropdown = ({ name, type, rute, click }: ItemsDropdownProps) => {
    /*     const menu = useMenu();
     */ const size = useSize();

    return (
        <li
            className={`dropdown-item ${
                size.mobileSize ? "mobile" : "desktop"
            }`}
            onClick={click}
        >
            <Link className="dropdown-link" to={rute}>
                <div className="dd-link-name">{name}</div>
            </Link>
        </li>
    );
};
type ItemsProps = {
    name: string;
    type: string;
    children?: React.ReactNode;
    rute?: string;
    click?: () => void;
};
const Item = ({ name, type, rute, children, click }: ItemsProps) => {
    /* const menu = useMenu(); */
    const size = useSize();
    const dropdown = useDropdown();
    const isLink = type === "link";
    return (
        <li
            className={`item ${size.mobileSize ? `mobile` : `desktop`}`}
            onClick={isLink ? click : dropdown.DropdownState}
        >
            {rute ? (
                <Link className="link" to={rute}>
                    <div className="link-name">{name}</div>
                </Link>
            ) : (
                <Fragment>
                    <div className="dropdown-name">{name}</div>
                    <ul className={`${type} ${dropdown.MenuDropdown}`}>
                        {children}
                    </ul>
                </Fragment>
            )}
        </li>
    );
};

type menuProps = {
    click: () => void;
    style: string;
};
const MenuButton = ({ click, style }: menuProps) => {
    return (
        <button className={style} type="button" onClick={click}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
        </button>
    );
};
const NavComponent = () => {
    const menu = useMenu();
    const size = useSize();
    return (
        <nav>
            {size.mobileSize ? (
                <Fragment>
                    <MenuButton click={menu.menuState} style={menu.iconClass} />
                    <ul className={menu.menuClass}>
                        <Item
                            name="Home"
                            type="link"
                            rute="/"
                            click={menu.menuState}
                        />
                        <Item
                            name="My List"
                            type="link"
                            rute="/my-list"
                            click={menu.menuState}
                        />
                        <Item name="Catalog" type="dropdown-menu">
                            <ItemDropdown
                                name="Animes"
                                type="link"
                                rute="/catalog/animes"
                                click={menu.menuState}
                            />
                            <ItemDropdown
                                name="Mangas"
                                type="link"
                                rute="/catalog/mangas"
                                click={menu.menuState}
                            />
                        </Item>
                    </ul>
                </Fragment>
            ) : (
                <ul className="menu-desktop">
                    <Item name="Home" type="link" rute="/" />
                    <Item name="My List" type="link" rute="/my-list" />
                    <Item name="Catalog" type="dropdown-menu" />
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
