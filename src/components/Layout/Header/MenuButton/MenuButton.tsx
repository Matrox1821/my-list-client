import React from "react";
import { useTheme } from "../../../../context/ThemeContext";

type menuProps = {
    click: () => void;
    style: string;
};
export const MenuButton = ({ click, style }: menuProps) => {
    const { theme } = useTheme();
    return (
        <button className={style} type="button" onClick={click}>
            <span className={`line ${theme}`} />
            <span className={`line ${theme}`} />
            <span className={`line ${theme}`} />
        </button>
    );
};
