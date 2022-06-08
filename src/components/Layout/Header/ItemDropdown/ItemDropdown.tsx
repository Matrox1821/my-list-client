import React from "react";
import { useSize } from "../../../../hooks/context/useSize";
import { Link } from "react-router-dom";

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
    const size = useSize();

    return (
        <li
            className={`dd-item ${size.mobileSize ? "mobile" : "desktop"}`}
            onClick={click}
        >
            <Link className="dd-link" to={rute}>
                <div className={`dd-link-name ${size.styleType}`}>{name}</div>
            </Link>
        </li>
    );
};
