import Header from './componets/Header/Header'
import NavBar from './componets/NavBar/NavBar'

import routes from './routes'
import { useRoutes } from 'react-router-dom'

function App() {
	
	const router = useRoutes(routes)
	
	return (
		<>
			<Header />
			<NavBar />
			{ router }
		</>
	);
}

export default App;
