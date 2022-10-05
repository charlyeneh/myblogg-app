import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="login">
			<h2>Register here!</h2>
			<form>
				<input required type="text" placeholder="Username" />
				<input required type="email" placeholder="Email" />
				<input required type="password" placeholder="Password" />
				<input required type="password" placeholder="Confirm Password" />
				<button>Register</button>
				<p>Invalid username or password</p>
				<span>
					Already have an account? <Link to="/Login">Login here!</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
