import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { foodsSelector, languageSelector } from "../../app/selectors";
import PhotoListView from "../../components/PhotoListView";
import ToolBar from "../../components/Toolbar";
import { useEffect } from "react";
import { setCurrentFoodView } from "../../app/rootSlice";
import HighlightText from "./HighlightText";

const Detail = () => {
	const { id } = useParams();
	const foods = useSelector(foodsSelector);
	const food = foods.find((food) => food.id === Number(id));
	const lang = useSelector(languageSelector);
	const dispatch = useDispatch();

	if (!food) return <div>Some thing are wrong!</div>;

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		dispatch(setCurrentFoodView({ id: Number(id) }));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const ingredientRendered = (
		<div className="accordion-item show">
			<h2 className="accordion-header  bg-white">
				<button
					className="accordion-button bg-white heading fs-4"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#ingredient"
				>
					{lang == "en" ? "Ingredient" : "Nguyên liệu"}
				</button>
			</h2>
			<div
				id="ingredient"
				className="accordion-collapse collapse show bg-white"
				data-bs-parent="#accordionMain"
			>
				<div className="accordion-body fs-6  bg-white">
					{food.ingredient[lang].map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</div>
			</div>
		</div>
	);

	const stepsRendered = food.steps.map((step, index) => (
		<div className="accordion-item show" key={index}>
			<h2 className="accordion-header">
				<button
					className="accordion-button bg-white heading fs-4"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#${index}`}
				>
					{step.name[lang]}
				</button>
			</h2>
			<div
				id={index.toString()}
				className="accordion-collapse collapse show bg-white"
				data-bs-parent="#accordionMain"
			>
				<div className="accordion-body fs-6">
					{step.content[lang].split("\n").map((paragraph, index) => (
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
				<h1 className="heading text-center py-2">{food.name[lang]}</h1>
				<p className="fs-5">{food.introduction[lang]}</p>
			</div>
			<PhotoListView imgPaths={food.imgPath} />
			<div className="container fs-5 py-4">{accoridonRendered}</div>
		</div>
	);
};

export default Detail;
