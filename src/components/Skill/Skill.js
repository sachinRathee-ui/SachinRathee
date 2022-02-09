import React, { useState } from 'react';
import './skill.css';

const Skill = ({ title, level }) => {
	const [addAnim, setAddAnim] = useState(false);

	const addAnimation = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 1000) {
			setAddAnim(true);
		}
	};

	window.addEventListener('scroll', addAnimation);

	return (
		<div className='si'>
			<div className='si-wrapper'>
				<span className='si-title'>{title}</span>
				<div className='si-progress'>
					<div className='si-progress-wrapper'>
						<div className='si-progress-bar'>
							<div
								className={`si-progress-percentage ${
									addAnim ? 'animation' : ''
								}`}
								style={{ width: `${addAnim ? level : 0}%` }}>
								{addAnim && (
									<div className='si-progress-end-circle'>{level}</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skill;
