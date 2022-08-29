import Header from './componets/Header/Header'
import NavBar from './componets/NavBar/NavBar'

import routes from './routes'
import { useRoutes } from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const { palette } = createTheme();
const theme = createTheme({
	palette: {
		secondary: {
			main: '#51bfa0'
		},
		primary: {
			main: '#d099c5'
		},
	}
});



function App() {
	
	const router = useRoutes(routes)
	
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<div className='d-flex'>
				<NavBar />
				{ router }
			</div>
		</ThemeProvider>
	);
}

export default App;
