import React from "react";
import { setValueToShow } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Button = ({ value, grow, extract }) => {
	const valueToShow = useSelector((state) => state.valueToShow);
	const dispatch = useDispatch();
	const onClick = () => {
		// if(extract){
		// 	return
		// }
		return dispatch(setValueToShow(valueToShow, value));
	};
	return (
		<button onClick={onClick} className={grow && "button-grow"}>
			<span>{value}</span>
		</button>
	);
};

export default Button;
