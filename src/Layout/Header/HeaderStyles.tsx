import styled from "styled-components";

interface tipe {
    size: number;
    menu: boolean;
}

export const StyledHeader = styled.header`
    height: 80px;
    background-color: #5a36e9;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
/* const styledA = `ul li{
        height: 90vh;
        position:absolute;
        top: 80px;
        left:0;
        width:100%;
        opacity: 1;
        transition: all 0.5s ease;
        background: red;
        }`;
const styledB = `ul li{
    display: none;
    }`; */
export const StyledNav = styled.nav<tipe>`
    ${(props) =>
        props.size <= 960
            ? `ul{
                list-style-type: none;
                height: 100%;
                position:fixed;
                top: 80px;
                background-color:red;
                left:${props.menu ? "-100%" : "0"};
                width:100%;
                opacity: 1;
                transition: all 0.5s ease;
            }
        li{
            padding:20px;
        }
        ul div{
            displa
        }
        `
            : `ul {
        display: flex;
    }
    `};
`;
export const StyledLogo = styled.nav`
    display: flex;
    align-items: center;
    margin: 15px;
`;
