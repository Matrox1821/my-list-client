import React, { Fragment } from "react";
import { HeaderComponent } from "./Header";

type Props = {
    children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <Fragment>
            <HeaderComponent />
            <main>{children}</main>
        </Fragment>
    );
};
