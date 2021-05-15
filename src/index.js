import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes/App";
import reducers from "./store/reducers";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.getElementById("root")
);
