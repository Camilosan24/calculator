import { useSelector } from "react-redux";

const EnterValues = () => {
	const totalValue = useSelector((state) => state.totalValue);
	const valueToProcess = useSelector((state) => state.valueToProcess);
	const temporalOperation = useSelector((state) => state.temporalOperation);
	return (
		<div className="enter-values-box">
			<span className="values">
				{temporalOperation === '' ? totalValue : valueToProcess}
			</span>
		</div>
	);
};

export default EnterValues;
