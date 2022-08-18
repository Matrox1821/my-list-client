import React from "react";
import { useSize } from "../../../../hooks/useSize";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../context/ThemeContext";

type ItemsDropdownProps = {
    name: string;
    type: string;
    rute: string;
    click: () => void;
};
export const ItemDropdown = ({
    name,
    type,
    rute,
    click,
}: ItemsDropdownProps) => {
    const { theme } = useTheme();
    const size = useSize();

    return (
        <li
            className={`dd-item__${size.mobileSize ? "mobile" : "desktop"}`}
            onClick={click}
        >
            <Link className={`dd-link ${theme}`} to={rute}>
                <div className={`dd-link-name ${theme}`}>{name}</div>
            </Link>
        </li>
    );
};
