import React from "react";

type menuProps = {
    click: () => void;
    style: string;
};
export const MenuButton = ({ click, style }: menuProps) => {
    return (
        <button className={style} type="button" onClick={click}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
        </button>
    );
};
