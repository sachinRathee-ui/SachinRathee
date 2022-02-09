import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './navbar.css';
import MenuLight from '../../assets/icons/MenuLight.png';
import MenuDark from '../../assets/icons/MenuDark.png';

import Toggle from '../Toggle/Toggle';

const NavBar = () => {
	const mode = useSelector((state) => state.theme.darkMode);

	const [addBG, setAddBG] = useState(false);
	const [active, setActive] = useState('home');
	const [isOpen, setIsOpen] = useState(false);

	const scrollToSection = (arg) => {
		if (arg === 'home') {
			setActive('home');
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		} else if (arg === 'about') {
			setActive('about');

			window.scrollTo({
				top: isOpen ? 899 : 750,
				behavior: 'smooth',
			});
		} else if (arg === 'skills') {
			setActive('skills');

			window.scrollTo({
				top: isOpen ? 1849 : 1500,
				behavior: 'smooth',
			});
		}
	};

	const handleMenu = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		window.addEventListener('scroll', () => {
			const scrolly = window.scrollY;

			setAddBG(scrolly > 50);
			if (scrolly < (isOpen ? 899 : 750)) {
				setActive('home');
			} else if (
				scrolly > (isOpen ? 899 : 750) &&
				scrolly < (isOpen ? 1849 : 1500)
			) {
				setActive('about');
			} else if (scrolly > (isOpen ? 1849 : 1500)) {
				setActive('skills');
			}
		});

		return () => {};
	}, []);

	window.addEventListener('scroll', scrollToSection);

	return (
		<div
			className='n'
			style={{
				backgroundColor: `${addBG ? (mode ? '#222' : 'white') : ''}`,
			}}>
			<div className='n-wrapper'>
				<div
					className='n-title'
					style={{ color: `${mode ? 'white' : '#222'}` }}>
					Sachin Rathee
				</div>

				{/* ----------------------------Responsive Menu--------------------- */}
				<div className='responsive-menu'>
					<div className='menu-icon' onClick={handleMenu}>
						<img
							src={mode ? MenuLight : MenuDark}
							alt='Menu'
							width={30}
							height={30}
						/>
					</div>
					<ul
						className='n-nav-items-responsive'
						style={{
							display: `${isOpen ? 'flex' : 'none'}`,
							color: `${mode ? 'white' : '#222'}`,
							backgroundColor: `${mode ? '#222' : 'white'}`,
						}}>
						<li
							className='n-nav-item-responsive'
							onClick={() => {
								scrollToSection('home');
								handleMenu();
							}}>
							Home
						</li>
						<li
							className='n-nav-item-responsive'
							onClick={() => {
								scrollToSection('about');
								handleMenu();
							}}>
							About
						</li>
						<li
							className='n-nav-item-responsive'
							onClick={() => {
								scrollToSection('skills');
								handleMenu();
							}}>
							Skills
						</li>
						<li
							className='n-nav-item-responsive'
							onClick={() => {
								// scrollToSection('skills');
								handleMenu();
							}}>
							<Toggle />
						</li>
					</ul>
				</div>
				{/* ---------------------------------Responsive Menu End------------------------ */}
				<ul
					className='n-nav-items'
					style={{ color: `${mode ? 'white' : '#222'}` }}>
					<li
						className={`n-nav-item ${active === 'home' ? 'active' : ''} `}
						onClick={() => scrollToSection('home')}>
						Home
					</li>
					<li
						className={`n-nav-item ${active === 'about' ? 'active' : ''} `}
						onClick={() => scrollToSection('about')}>
						About
					</li>
					<li
						className={`n-nav-item ${active === 'skills' ? 'active' : ''} `}
						onClick={() => scrollToSection('skills')}>
						Skills
					</li>
					<li className={`n-nav-item`}>
						<Toggle />
					</li>
				</ul>
				{/* <Toggle /> */}
			</div>
		</div>
	);
};

export default NavBar;
