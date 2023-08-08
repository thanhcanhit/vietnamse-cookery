import { useParams } from "react-router-dom";
import ToolBar from "../../components/Toolbar";
import { useSelector } from "react-redux";
import {
	foodsSelector,
	languageSelector,
	touristAttractionSelector,
} from "../../app/selectors";
import PhotoListView from "../../components/PhotoListView";

const TouristAttractions = () => {
	// Get current language
	const lang = useSelector(languageSelector);

	// Get current food id
	const { foodId } = useParams();
	const food = useSelector(foodsSelector).find(
		(food) => food.id === Number(foodId)
	);

	// Get locations
	const locationIds = food?.touristAttractions;
	const locations = useSelector(touristAttractionSelector).filter(
		(location) => locationIds?.includes(location.id)
	);

	// Render
	const locationsRendered = locations.map((location, index) => (
		<div key={index}>
			<PhotoListView imgPaths={location.imgPath} />
			<div className="p-2">
				<button
					className="btn background-primary w-100 text-white fs-5"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#collapse-${index}`}
				>
					{index + 1}. {location.name[lang]}
				</button>
				<div className="collapse" id={`collapse-${index}`}>
					<div
						className="card card-body bg-white"
						style={{ fontSize: 18 }}
					>
						{location.introduction[lang].split("\n").map((line) => (
							<p>{line}</p>
						))}
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
					<h1>Not found</h1>
				) : (
					<div>
						<h2 className="text-center py-2">
							{lang === "en"
								? "Places related to the dish "
								: "Các địa điểm liên quan đến món ăn "}
							<br />
							<span className="heading">"{food.name[lang]}"</span>
						</h2>
					</div>
				)}
				{locationsRendered}
			</div>
		</div>
	);
};

export default TouristAttractions;
