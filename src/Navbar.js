import React from 'react';
import './Navbar.css';
import { useEffect } from 'react';
import { useState } from 'react';

function Navbar() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'} `}>
			<img
				className="nav__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
				alt="Netflix Logo"
			/>

			<img
				className="nav__avatar"
				src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E?format=jpg&name=small"
				alt="Netflix Smiley Face"
			/>
		</div>
	);
}

export default Navbar;
