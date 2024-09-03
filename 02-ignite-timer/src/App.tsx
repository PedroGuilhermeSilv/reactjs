import {
	BrowserRouter as Router,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { Routers } from "./Routers";
import { GlobalStyle } from './styles/global';
import { defaultTheme } from "./styles/theme/default";


export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
		<Router>
			<Routers />
		</Router>
		<GlobalStyle />
		</ThemeProvider>
	);
}
