import { useSelector } from "react-redux";

const EnterValues = () => {
	const valueToShow = useSelector(state => state.valueToShow);
	return (
		<div className="enter-values-box">
			<span className="values">{valueToShow}</span>
		</div>
	);
};

export default EnterValues;
