import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import store from "./context/store";

ReactDOM.render(
	<Provider store={store}>
		<link
			href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap"
			rel="stylesheet"
		></link>
		<App />
	</Provider>,
	document.getElementById("root")
);
