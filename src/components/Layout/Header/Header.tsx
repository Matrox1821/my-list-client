import React, { FC } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { LogoMenu } from "./LogoMenu/LogoMenu";
import { NavMenu } from "./NavMenu/NavMenu";
export const Header: FC = () => {
    const { theme } = useTheme();
    return (
        <header className={`theme ${theme}`}>
            <LogoMenu />
            <NavMenu />
        </header>
    );
};
