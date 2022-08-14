import Home from './Pages/Home/Home'
import Users from './Pages/Users/Users'
import User from './Pages/User/User'

let routes = [
	{ path: '/', element: <Home />},
	{ path: '/users', element: <Users />},
	{ path: '/user/:userID', element: <User />}
]

export default routes