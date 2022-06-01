import React from 'react';
/* import * as Font from "expo-font"; */
import { Provider } from 'react-redux';
import { AppRouters } from './Routers/AppRouters';

type Props = {
  store: any;
};
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
    <div className='App'>
      <AppRouters />
    </div>
  );
}

export default App;
