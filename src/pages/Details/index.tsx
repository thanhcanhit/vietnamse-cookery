import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ToolBar from "../../components/Toolbar";
import PhotoListView from "../../components/PhotoListView";
import HighlightText from "./HighlightText";
import { setCurrentFoodView } from "../../app/rootSlice";
import { languageSelector } from "../../app/langSlice";
import { currentFoodSelector } from "../../app/selectors";

const Detail = () => {
	const { id } = useParams();
	const food = useSelector(currentFoodSelector);
	const language = useSelector(languageSelector);
	const dispatch = useDispatch();

	// Set current food view id to this id
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		dispatch(setCurrentFoodView({ id: Number(id) }));
		window.scrollTo(0, 0);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// If not found show notify
	if (!food) return <h1 className="text-center">Some thing are wrong!</h1>;

	// Render ingredient of the recipe
	const ingredientRendered = (
		<div className="accordion-item show">
			<h2 className="accordion-header  bg-white">
				<button
					className="accordion-button bg-danger-subtle color-primary heading fs-4 "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#ingredient"
				>
					{language == "en" ? "Ingredient" : "Nguyên liệu"}
				</button>
			</h2>
			<div
				id="ingredient"
				className="accordion-collapse collapse show bg-white"
				data-bs-parent={`#parentIngredient`}
			>
				<div className="accordion-body fs-6  ">
					{food.ingredient[language].map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</div>
			</div>
		</div>
	);

	// Render step by step of the recipe
	const stepsRendered = food.steps.map((step, index) => (
		<div className="accordion-item show" key={index}>
			<h2 className="accordion-header">
				<button
					className="accordion-button heading fs-4 bg-danger-subtle color-primary "
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#${index}`}
				>
					{step.name[language]}
				</button>
			</h2>
			<div
				id={index.toString()}
				className="accordion-collapse collapse show bg-white"
				data-bs-parent={`#parent${index}`}
			>
				<div className="accordion-body fs-6">
					{step.content[language]
						.split("\n")
						.map((paragraph, index) => (
							<HighlightText key={index} paragraph={paragraph} />
						))}
				</div>
			</div>
		</div>
	));

	const accoridonRendered = (
		<div className="accordion" id="accordionMain">
			{ingredientRendered}
			{stepsRendered}
		</div>
	);

	return (
		<div style={{ marginTop: 60 }}>
			<ToolBar />
			<div className="container">
				<h1
					key={language}
					className="heading text-center py-2 color-primary animate__animated animate__bounceIn"
				>
					{food.name[language]}
				</h1>
				<p className="fs-5">{food.introduction[language]}</p>
			</div>
			<PhotoListView imgPaths={food.imgPath} />
			<div className="container fs-5 py-4">{accoridonRendered}</div>
		</div>
	);
};

export default Detail;
