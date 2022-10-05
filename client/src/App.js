import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles.scss';

const Layout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/post/:id', element: <SinglePost /> },
			{ path: '/write', element: <CreatePost /> },
		],
	},
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <Register /> },
]);

function App() {
	return (
		<div className="app">
			<div className="container">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
