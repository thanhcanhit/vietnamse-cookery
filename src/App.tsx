import {
	BrowserRouter,
	Route,
	Link,
	Routes,
	useParams,
} from "react-router-dom";
import "./App.css";
import {  useState } from "react";

function Test() {
	const { id } = useParams();

	return <h1>{id}</h1>;
}

function App() {
	const [id, setId] = useState<string>("0");
	return (
		<BrowserRouter>
			<Link to="/">Home</Link>
			<br />
			<Link to="/2">Second page</Link>
			<br />
			<Link to="/3">Third page</Link>
			<br />
			<input
				style={{ padding: 8, width: 50, marginRight: 8 }}
				value={id}
				onChange={(e: React.FormEvent<HTMLInputElement>) =>
					setId(e.currentTarget.value)
				}
			/>
			<Link to={`/food/${id}`}>Go to Id page</Link>

			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/2" element={<h1>Second</h1>} />
				<Route path="/3" element={<h1>Third</h1>} />
				<Route path="/food/:id" element={<Test />} />
				<Route path="*" element={<h1>Page not found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
