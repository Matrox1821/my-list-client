import React, { Fragment } from "react";
import { useSize } from "../../../../hooks/context/useSize";
import { useMenu } from "../../../../hooks/context/useMenu";
import { MenuButton } from "../MenuButton/MenuButton";
import { Item } from "../Item/Item";
import { ItemDropdown } from "../ItemDropdown/ItemDropdown";
export const NavMenu = () => {
    const menu = useMenu();
    const size = useSize();
    if (size.mobileSize) {
        return (
            <nav>
                <Fragment>
                    <MenuButton click={menu.menuState} style={menu.iconClass} />
                    <ul className={`menu-${size.styleType} ${menu.menuClass}`}>
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
            </nav>
        );
    }
    return (
        <nav>
            <ul className="menu-desktop">
                <Item name="Home" type="link" rute="/" />
                <Item name="My List" type="link" rute="/my-list" />
                <Item name="Catalog" type="dd-menu">
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
        </nav>
    );
};
