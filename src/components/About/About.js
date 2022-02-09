import React, { useEffect, useState } from 'react';

import './about.css';
import AboutImg from '../../assets/img/a-me.jpg';

const About = () => {
	const date = new Date();
	const time = date.getHours();
	const [greet, setGreet] = useState('Good Morning');

	useEffect(() => {
		if (time < 12) {
			setGreet('Good Morning');
		} else if (time >= 12 && time < 13) {
			setGreet('Good Noon');
		} else if (time >= 13 && time < 24) {
			setGreet('Good Evening');
		}
	}, [time]);

	const deleteAction = () => {
		window.location.reload();
	};

	return (
		<div className='a'>
			<div className='a-left'>
				<div className='a-card bg'></div>
				<div className='a-card'>
					<img src={AboutImg} alt='Sachin Rathee' className='a-img' />
				</div>
			</div>
			<div className='a-right'>
				<h1 className='a-title'>About Me</h1>
				<p className='a-sub'>{greet}, Myself is Sachin Rathee.</p>
				<p className='a-desc'>
					I'm passionate about implementing and launching new projects with the
					ability to translate business requirements into technical solution.
					I'm having 2.5+ years of experince in this industry. I recently began
					to be fascinated by web programming, e.g. developing apps and building
					websites. Proficient in HTML, CSS, JavaScript, React Native and React
					JS.
				</p>
				<div className='a-details'>
					<div className='a-detail-item'>
						<span className='a-detail-heading'>Languages</span>
						<ul>
							<li>Hindi</li>
							<li>English</li>
						</ul>
					</div>
				</div>
				<div className='a-button'>
					<a href='#' className='a-download-button' onClick={deleteAction}>
						Download CV
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
