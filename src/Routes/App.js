import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";

const App = () => {
	return (
		<BrowserRouter className="App">
			<Switch>
				<Layout>
					<Route path="/" component={Home} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
