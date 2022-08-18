import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../context/ThemeContext";
import { useDropdown } from "../../../../hooks/useDropdown";
import { useSize } from "../../../../hooks/useSize";

type ItemsProps = {
    name: string;
    type: string;
    children?: React.ReactNode;
    rute?: string;
    click?: () => void;
};
export const Item = ({ name, type, rute, children, click }: ItemsProps) => {
    const { theme } = useTheme();
    const size = useSize();
    const dropdown = useDropdown();
    const isLink = type === "link";

    return (
        <li
            className={`item__${size.mobileSize ? `mobile` : `desktop`}`}
            onClick={isLink ? click : dropdown.DropdownState}
        >
            {rute ? (
                <Link className="link" to={rute}>
                    <div className={`link-name ${theme}`}>{name}</div>
                </Link>
            ) : (
                <Fragment>
                    <div className={`dd-name__${size.styleType} ${theme}`}>
                        {name}
                    </div>
                    <ul className={`${type} ${dropdown.MenuDropdown}`}>
                        {children}
                    </ul>
                </Fragment>
            )}
        </li>
    );
};
