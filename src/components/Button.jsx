import React from "react";
import {
	setValueToProcess,
	deleteValueToProcess,
	setTemporalOperation,
	processOperation,
	clearAll,
} from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Button = ({ value, grow, deleteValue }) => {
	const totalValue = useSelector((state) => state.totalValue);
	const temporalOperation = useSelector((state) => state.temporalOperation);
	const valueToProcess = useSelector((state) => state.valueToProcess);
	const dispatch = useDispatch();
	const changeValues = () => {
		//BORRAR UN NUMERO
		if (deleteValue) {
			if (valueToProcess == "0" || totalValue == 0) return;

			return dispatch(
				deleteValueToProcess(
					temporalOperation !== "" ? valueToProcess : totalValue
				)
			);
		}
		//ANADIR UN NUMERO
		return dispatch(
			setValueToProcess(
				temporalOperation !== "" ? valueToProcess : totalValue,
				value,
				temporalOperation
			)
		);
	};
	const onClick = () => {
		if (
			value === "+" ||
			value === "-" ||
			value === "*" ||
			value === "/" ||
			value === "%"
		) {
			return dispatch(setTemporalOperation(value));
		}
		if (value === "=") {
			console.log(temporalOperation)
			return dispatch(
				processOperation(totalValue, valueToProcess, temporalOperation)
			);
		}

		if (value === "AC") {
			return dispatch(clearAll());
		}
		changeValues();
	};
	return (
		<button onClick={onClick} className={grow && "button-grow"}>
			<span>{value}</span>
		</button>
	);
};

export default Button;
