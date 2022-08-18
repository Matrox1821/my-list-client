import { useState } from "react";
export const useMenu = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const menuState = () => {
        setOpenMenu(!openMenu);
    };
    const menuClass = openMenu ? "active" : "";
    const iconClass = openMenu ? "menu-icon active" : "menu-icon";
    return {
        openMenu,
        menuState,
        menuClass,
        iconClass,
    };
};
