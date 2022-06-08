import React, { FC } from "react";
import "../../../assets/css/Header.css";
import { LogoMenu } from "./LogoMenu/LogoMenu";
import { NavMenu } from "./NavMenu/NavMenu";
export const Header: FC = () => {
    return (
        <header>
            <LogoMenu />
            <NavMenu />
        </header>
    );
};
