import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDropdown } from "../../../../hooks/context/useDropdown";
import { useSize } from "../../../../hooks/context/useSize";

type ItemsProps = {
    name: string;
    type: string;
    children?: React.ReactNode;
    rute?: string;
    click?: () => void;
};
export const Item = ({ name, type, rute, children, click }: ItemsProps) => {
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
                    <div className={`dd-name ${size.styleType} `}>{name}</div>
                    <ul
                        className={`${type} ${size.styleType} ${dropdown.MenuDropdown}`}
                    >
                        {children}
                    </ul>
                </Fragment>
            )}
        </li>
    );
};
