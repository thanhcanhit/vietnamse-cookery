import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ControlBar from "./components/ControlBar";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<h1>Home</h1>} />
					<Route path="/me" element={<h1>My list</h1>} />
					<Route path="*" element={<h1>Page not found</h1>} />
				</Routes>
				<ControlBar />
			</BrowserRouter>
		</>
	);
}

export default App;
