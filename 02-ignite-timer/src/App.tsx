import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./@types/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variants="primary" />
      <Button variants="secondary" />
      <Button variants="danger"/>
      <Button variants="success"/> 
      <Button  />
      

      <GlobalStyle />

    </ThemeProvider>
  );
}

