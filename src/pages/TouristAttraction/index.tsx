import { useSelector } from "react-redux";
import ToolBar from "../../components/Toolbar";
import PhotoListView from "../../components/PhotoListView";
import {
	currentFoodSelector,
	currentFoodTouristList,
} from "../../app/selectors";
import { languageSelector } from "../../app/langSlice";
import { MultiLanguage } from "../../types/interface";
import { useEffect } from "react";

const heading: MultiLanguage = {
	en: "Places related to the dish ",
	vi: "Các địa điểm liên quan đến ",
};

const TouristAttractions = () => {
	// Get current language
	const language = useSelector(languageSelector);

	// Get current food id
	const food = useSelector(currentFoodSelector);

	// Get locations
	const locations = useSelector(currentFoodTouristList);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Render location list
	const locationsRendered = locations.map((location) => (
		<div key={location.id}>
			<PhotoListView imgPaths={location.imgPath} />
			<div className="p-2">
				<button
					className="btn background-primary w-100 text-white fs-5"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#collapse-${location.id}`}
				>
					{location.id + 1}. {location.name[language]}
				</button>
				<div className="collapse" id={`collapse-${location.id}`}>
					<div
						className="card card-body bg-white"
						style={{ fontSize: 18 }}
					>
						{location.introduction[language]
							.split("\n")
							.map((line, index) => (
								<p key={index}>{line}</p>
							))}

						{location.mapLink && (
							<a href={location.mapLink} className="text-primary text-center">Google map</a>
						)}
					</div>
				</div>
			</div>
			<hr />
		</div>
	));

	return (
		<div>
			<ToolBar />
			<div style={{ marginTop: 60 }}>
				{!food ? (
					<h1 className="text-center">Some thing is wrong</h1>
				) : (
					<div>
						<h2 className="text-center py-2 ">
							{heading[language]}
							<br />
							<span className="heading color-primary d-inline-block  animate__animated animate__bounceIn">
								"{food.name[language]}"
							</span>
						</h2>
					</div>
				)}
				{locationsRendered}
			</div>
		</div>
	);
};

export default TouristAttractions;
