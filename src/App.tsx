import React from "react";
import "./App.css";
/* import * as Font from "expo-font"; */
import { AppRouters } from "./Routers/AppRouters";

function App() {
    /* const { fontsLoaded, setFontsLoaded } = useState<boolean>(false);
    const loadFonts = async () => {
        Font.loadAsync({
            "louis-george-cafe": require("./assets/fonts/Louis George Cafe.ttf"),
        });
    };
    setFontsLoaded(true);
    useEffect(() => {
        if (!fontsLoaded) {
            loadFonts();
        }
    }); */
    return (
        <div className="App">
            <AppRouters />
        </div>
    );
}

export default App;
