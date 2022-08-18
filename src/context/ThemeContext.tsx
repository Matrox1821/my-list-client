import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>({ theme: "light", undefined });

type Props = {
    children: JSX.Element | JSX.Element[];
};
const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () =>
        theme === "dark" ? setTheme("light") : setTheme("dark");
    const value = { theme, toggleTheme };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
const useTheme = () => useContext(ThemeContext);
export { ThemeProvider as default, useTheme };
