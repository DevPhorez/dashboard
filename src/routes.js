import Home from './Pages/Home/Home'
import Users from './Pages/Users/Users'
import User from './Pages/User/User'
import Products from './Pages/Products/Products'
import Product from './Pages/Product/Product'

let routes = [
	{ path: '/', element: <Home />},
	{ path: '/users', element: <Users />},
	{ path: '/user/:userID', element: <User />},
	{ path: '/products', element: <Products />},
	{ path: '/product/:productID/:productTitle', element: <Product />},
]

export default routes