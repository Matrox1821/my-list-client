import { useState } from "react";
export const useDropdown = () => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);

    const DropdownState = () => {
        setOpenDropdown(!openDropdown);
    };
    const MenuDropdown = openDropdown ? "open" : "";
    return {
        openDropdown,
        DropdownState,
        MenuDropdown,
    };
};
