import React from "react";
import ThemeProvider from "./context/ThemeContext";
import { AppRouters } from "./Routers/AppRouters";
function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <AppRouters />
            </div>
        </ThemeProvider>
    );
}

export default App;
