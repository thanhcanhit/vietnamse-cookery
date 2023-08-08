import { BrowserRouter, Route, Routes } from "react-router-dom";
import ControlBar from "./components/ControlBar";
import Home from "./pages/Home";
import "./App.css";
import Detail from "./pages/Details";

function App() {
	return (
		<div className="app">
			<BrowserRouter basename="vietnamse-cookery">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorite" element={<h1>My list</h1>} />
					<Route path="/food/:id" element={<Detail />} />
					<Route
						path="*"
						element={
							<h1 className="w-100 pt-5 d-flex justify-content-center  align-items-center ">
								Page not found
							</h1>
						}
					/>
				</Routes>
				<ControlBar />
			</BrowserRouter>
		</div>
	);
}

export default App;
