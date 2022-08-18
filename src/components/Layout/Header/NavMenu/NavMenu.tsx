import React, { Fragment } from "react";
import { useSize } from "../../../../hooks/useSize";
import { useMenu } from "../../../../hooks/useMenu";
import { useDropdown } from "../../../../hooks/useDropdown";
import { MenuButton } from "../MenuButton/MenuButton";
import { Item } from "../Item/Item";
import { ItemDropdown } from "../ItemDropdown/ItemDropdown";
import { useTheme } from "../../../../context/ThemeContext";
export const NavMenu = () => {
    const { theme } = useTheme();
    const menu = useMenu();
    const size = useSize();
    const dropdown = useDropdown();
    const DropdownInteraction = () => {
        menu.menuState();
        dropdown.DropdownState();
    };
    if (size.mobileSize) {
        return (
            <nav>
                <Fragment>
                    <MenuButton click={menu.menuState} style={menu.iconClass} />
                    <ul
                        className={`menu__${size.styleType} ${theme} ${menu.menuClass}`}
                    >
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
                        <Item name="Catalog" type="dd-menu">
                            <ItemDropdown
                                name="Animes"
                                type="link"
                                rute="/catalog/animes"
                                click={DropdownInteraction}
                            />
                            <ItemDropdown
                                name="Mangas"
                                type="link"
                                rute="/catalog/mangas"
                                click={DropdownInteraction}
                            />
                        </Item>
                    </ul>
                </Fragment>
            </nav>
        );
    }
    return (
        <nav>
            <ul className="menu__desktop">
                <Item name="Home" type="link" rute="/" />
                <Item name="My List" type="link" rute="/my-list" />
                <Item name="Catalog" type="dd-menu">
                    <ItemDropdown
                        name="Animes"
                        type="link"
                        rute="/catalog/animes"
                        click={dropdown.DropdownState}
                    />
                    <ItemDropdown
                        name="Mangas"
                        type="link"
                        rute="/catalog/mangas"
                        click={dropdown.DropdownState}
                    />
                </Item>
            </ul>
        </nav>
    );
};
