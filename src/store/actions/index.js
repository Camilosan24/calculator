import handleOperations from "../../assets/operations";

export const setValueToProcess = (preValue, nexValue, operation) => ({
	type: "SET_VALUE_TO_PROCESS",
	payload: preValue === 0 ? nexValue : preValue + nexValue,
});

export const deleteValueToProcess = (value) => ({
	type: "SET_VALUE_TO_PROCESS",
	payload: value.substring(0, value.length - 1),
});

export const setTemporalOperation = (value) => ({
	type: "SET_TEMPORAL_OPERATION",
	payload: value,
});

export const processOperation = (totalValue, valueToProcess, operation) => ({
	type: "PROCESS_OPERATION",
	payload: handleOperations(totalValue, valueToProcess, operation),
});

export const clearAll = () => ({
	type: "CLEAR_ALL",
	payload: null,
});
