import React from "react";
import "./App.css";
/* import * as Font from "expo-font"; */
import { Provider } from "react-redux";
import { AppRouters } from "./Routers/AppRouters";

type Props = {
    store:any
}
function App({store}:Props) {
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
        <Provider store={store}>
            <div className="App">
                <AppRouters />
            </div>
        </Provider>
    );
}

export default App;
