const initialState = {
	valueToShow: 0,
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "SET_VALUE_TO_SHOW":
			return {
				...state,
				valueToShow: action.payload,
			};
		default:
			return state;
	}
};

export default reducers;
