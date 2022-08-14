import Home from './Pages/Home/Home'
import Users from './Pages/Users/Users'
import User from './Pages/User/User'
import Products from './Pages/Products/Products'

let routes = [
	{ path: '/', element: <Home />},
	{ path: '/users', element: <Users />},
	{ path: '/user/:userID', element: <User />},
	{ path: '/products', element: <Products />},
]

export default routes