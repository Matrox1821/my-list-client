import { useState, useEffect } from "react";
export const useSize = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const changeWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", changeWidth);
        /* showMobileMenu(); */
        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    });

    const mobileSize = width <= 960;

    const styleType = mobileSize ? "mobile" : "desktop";
    return {
        width,
        changeWidth,
        mobileSize,
        styleType,
    };
};
