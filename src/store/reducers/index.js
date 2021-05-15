const initialState = {
	totalValue: 0,
	valueToProcess: "",
	temporalOperation: "",
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case "SET_VALUE_TO_PROCESS":
			if (state.temporalOperation !== "") {
				return {
					...state,
					valueToProcess: action.payload,
				};
			}
			return {
				...state,
				totalValue: action.payload,
			};
		case "SET_TEMPORAL_OPERATION":
			return {
				...state,
				temporalOperation: action.payload,
			};
		case "PROCESS_OPERATION":
			return {
				temporalOperation: "",
				totalValue: action.payload,
				valueToProcess: "",
			};
		case "CLEAR_ALL":
			return initialState;
		default:
			return state;
	}
};

export default reducers;
