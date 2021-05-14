import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes/App";
import reducers from "./store/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
