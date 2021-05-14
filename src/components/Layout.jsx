import "../css/index.css";
import Title from "../components/Title";

const Layout = (props) => {
	return (
		<div className="container">
			<nav>
				<Title />
			</nav>
			<section>{props.children}</section>
		</div>
	);
};

export default Layout;
