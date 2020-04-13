import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>To Do List</h1>
			<Link style={linkStyle} to="/">
				Home
			</Link>{' '}
			|{' '}
			<Link style={linkStyle} to="/about">
				About
			</Link>
		</header>
	);
}

// these can be referred to by className in App.css if desired
const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
};

const linkStyle = {
	color: '#fff',
	textDecoration: 'none',
	cursor: 'pointer'
};

export default Header;
