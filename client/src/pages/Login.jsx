import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="login">
			<h2>Login here!</h2>
			<form>
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<button>Login</button>
				<p>Invalid username or password</p>
				<span>
					Dont have an account? <Link to="/Register">Register here!</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
