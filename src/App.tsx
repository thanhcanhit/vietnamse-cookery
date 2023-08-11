import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ControlBar from "./components/ControlBar";
import Home from "./pages/Home";
import "./App.css";
import Detail from "./pages/Details";
import TouristAttractions from "./pages/TouristAttraction";
import Favorite from "./pages/Favorite";
import Welcome from "./pages/Welcome";
import { useSelector } from "react-redux";
import { isFirstTimeSelector } from "./app/rootSlice";
import { useEffect, useState } from "react";
import LoadingCover from "./components/LoadingCover";

function App() {
	const isFirstTime = useSelector(isFirstTimeSelector);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const toKey = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => {
			clearTimeout(toKey);
		}
	}, [])

	if (isLoading) return <LoadingCover />;

	return (
		<div className="app">
			<BrowserRouter basename="vietnamse-cookery">
				{isFirstTime && <Welcome />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorite" element={<Favorite />} />
					<Route path="/food/:id" element={<Detail />} />
					<Route
						path="/location/:foodId"
						element={<TouristAttractions />}
					/>
					<Route
						path="*"
						element={
							<h1 className="w-100 pt-5 d-flex justify-content-center  align-items-center ">
								Page not found
								<Link to="/">Return to home page</Link>
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
