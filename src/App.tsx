import { BrowserRouter, Route, Routes } from "react-router-dom";
import ControlBar from "./components/ControlBar";
import Home from "./pages/Home";
import "./App.css";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/favorite" element={<h1>My list</h1>} />
					<Route path="*" element={<h1>Page not found</h1>} />
				</Routes>
				<ControlBar />
			</BrowserRouter>
		</div>
	);
}

export default App;
