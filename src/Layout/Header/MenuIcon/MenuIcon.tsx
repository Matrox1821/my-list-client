import React, { useState } from "react";
import styled from "styled-components";

interface TitleProps {
    readonly isActive: boolean;
}

const StyledMenuIcon = styled.button<TitleProps>`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    & .line {
        display: block;
        width: 40px;
        height: 3px;
        background-color: white;
        margin-block: 10px;
        border-radius: 4px;
        transition: transform 0.5s, opacity 0.25s;
    }
    ${(props) =>
        props.isActive === true
            ? `& .line:nth-child(1) {
                transform:translateY(13px) rotate(45deg);
            }
            & .line:nth-child(2) {
                opacity:0;
            }
            & .line:nth-child(3) {
                transform:translateY(-13px) rotate(-45deg);
            }`
            : ""};
`;

export const MenuIconStyled = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const MenuState = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <StyledMenuIcon type="button" onClick={MenuState} isActive={openMenu}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
        </StyledMenuIcon>
    );
};
