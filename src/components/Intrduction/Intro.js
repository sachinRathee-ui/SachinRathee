import React from 'react';

import './intro.css';
import Me from '../../assets/img/me.png';
import { useSelector } from 'react-redux';

const Intro = () => {
	const mode = useSelector((state) => state.theme.darkMode);

	const scrollToNext = () => {
		window.scrollTo({
			top: 750,
			behavior: 'smooth',
		});
	};

	return (
		<div className='i'>
			<div className='i-left'>
				<div className='i-left-wrapper'>
					<h2 className='i-intro'>Hello, My name is</h2>
					<h1 className='i-name'>Sachin Rathee</h1>
					<div className='i-title'>
						<div className='i-title-wrapper'>
							<div className='i-title-item'>Web Devloper</div>
							<div className='i-title-item'>Azure DevOps</div>
						</div>
					</div>
					<p className='i-desc'>
						I design and develop services for the customers of all sizes,
						specializing in creating stylish, modern websites, web services and
						online stores.
					</p>
				</div>
				<div className='rotate' onClick={scrollToNext}>
					<svg
						fill='none'
						height='24'
						viewBox='0 0 24 24'
						width='24'
						className='i-scroll'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M12.5 7C12.5 6.44772 12.0523 6 11.5 6C10.9477 6 10.5 6.44772 10.5 7V10C10.5 10.5523 10.9477 11 11.5 11C12.0523 11 12.5 10.5523 12.5 10V7Z'
							fill={`${mode ? 'white' : '#222'}`}
						/>
						<path
							clipRule='evenodd'
							d='M3 8C3 4.13401 6.13401 1 10 1H13C16.866 1 20 4.13401 20 8V16C20 19.866 16.866 23 13 23H10C6.13401 23 3 19.866 3 16V8ZM10 3H13C15.7614 3 18 5.23858 18 8V16C18 18.7614 15.7614 21 13 21H10C7.23858 21 5 18.7614 5 16V8C5 5.23858 7.23858 3 10 3Z'
							fill={`${mode ? 'white' : '#222'}`}
							fillRule='evenodd'
						/>
					</svg>
				</div>
			</div>
			<div className='i-right'>
				<div className='i-bg'></div>
				<img src={Me} alt='Sachin Rathee' className='i-img' />
			</div>
		</div>
	);
};

export default Intro;
