import { TOGGLE } from '../constants/Constants';

export const changeTheme = (mode) => {
	return {
		type: TOGGLE,
		payload: mode,
	};
};
