import Button from "./Button";

const ButtonsContainer = () => {
	const onClick = (e) => {
		console.log(e.target);
	};

	return (
		<div className="buttons-box">
			<div className="row">
				<Button value="7" />
				<Button value="4" />
				<Button value="1" />
				<Button value="." />
			</div>
			<div className="row">
				<Button value="8" />
				<Button value="5" />
				<Button value="2" />
				<Button value="0" />
			</div>
			<div className="row">
				<Button value="9" />
				<Button value="6" />
				<Button value="3" />
				<Button value="," />
			</div>
			<div className="row">
				<Button value="/" />
				<Button value="x" />
				<Button value="-" />
				<Button value="+" />
			</div>
			<div className="row">
				<Button value={<i className="fas fa-backspace"></i>} delete={true} />
				<Button value="%" />
				<Button value="=" grow={true} />
			</div>
		</div>
	);
};

export default ButtonsContainer;
