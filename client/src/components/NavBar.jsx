import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg';

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					<img src={Logo} alt="" />
				</div>
				<div className="links">
					<Link className="link" to="/?cat=art">
						Art
					</Link>
					<Link className="link" to="/?cat=science">
						Science
					</Link>
					<Link className="link" to="/?cat=technology">
						Technology
					</Link>
					<Link className="link" to="/?cat=cinema">
						Cinema
					</Link>
					<Link className="link" to="/?cat=culture">
						Culture
					</Link>
					<Link className="link" to="/?cat=politics">
						Politics
					</Link>
					<span>John</span>
					<span>Log out</span>
					<span className="write">
						<Link to="/write">write</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
