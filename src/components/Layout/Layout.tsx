import React from "react";
import { Header } from "./Header";

type Props = {
    children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};
