import { TOGGLE } from '../constants/Constants';

const initialState = {
	darkMode: false,
};

export const ThemeReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE:
			return { darkMode: !state.darkMode };

		default:
			break;
	}
	return state;
};
