import React, { useState } from 'react';

import Sun from '../../assets/icons/sun.png';
import Moon from '../../assets/icons/moon.png';
import './toggle.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../Redux/actions/Actions';

const Toggle = () => {
	const mode = useSelector((state) => state.theme.darkMode);
	const dispatch = useDispatch();

	const handleToggle = () => {
		dispatch(changeTheme(!mode));
	};

	return (
		<div className='t' onClick={handleToggle}>
			<div className='t-text'>Change Theme</div>
			<div className='t-button'>
				<div className='t-button-hover'>Change Theme</div>

				{mode ? (
					<>
						<img src={Moon} alt='Dark Mode' className='t-icon' />
					</>
				) : (
					<>
						<img src={Sun} alt='Light Mode' className='t-icon' />
					</>
				)}
			</div>
		</div>
	);
};

export default Toggle;
