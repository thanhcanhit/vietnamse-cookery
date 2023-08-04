import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./app/store";
import "./index.css";
import "react-photo-view/dist/react-photo-view.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
		<p className="pc-notice">
			Sorry this app just supported for mobile device <br /> You can try
			something interesting at{" "}
			<a href="https://thanhcanhit.github.io">thanhcanhit</a>
		</p>
	</React.StrictMode>
);
