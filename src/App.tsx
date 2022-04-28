import { ColorScheme, ColorSchemeProvider, MantineProvider, Paper } from "@mantine/core";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";
import "./App.css";
import AppShellExample from "./Components/AppShell";
// import Buttons from "./Components/Button";
// import Cards from "./Components/Cards";
// import LightAndDarkModeButton from "./Components/LightDarkButton";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  
  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}}>
      <Paper>
      <AppShellExample />
      </Paper>
       
        {/* <Cards /> */}
        {/* <LightAndDarkModeButton /> */}
        {/* <Buttons /> */}
      
      </MantineProvider>
      </ColorSchemeProvider>
      <h1>Test</h1>
    </div>
  );
}

export default App;