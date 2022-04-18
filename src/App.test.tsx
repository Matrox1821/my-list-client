import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
describe("<App />", () => {
    let component;
    test("Renders App", () => {
        component = render(<App />);
        expect(component).toMatchSnapshot();
    });
});
