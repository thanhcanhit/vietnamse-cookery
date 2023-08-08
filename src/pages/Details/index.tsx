import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { foodsSelector, languageSelector } from "../../app/selectors";
import PhotoListView from "../../components/PhotoListView";
import ToolBar from "./ToolBar";
import styles from "./details.module.css";

const HighlightText = ({ paragraph }: { paragraph: string }) => {
	// Search :
	if (paragraph.includes(":"))
		return (
			<p>
				<b>{paragraph.slice(0, paragraph.indexOf(":"))}</b>
				{paragraph.slice(paragraph.indexOf(":"), paragraph.length)}
			</p>
		);

	// Search by keyword
	const keywords = ["Bước", "Step", "Finnaly"];
	const isBold = keywords.some((keyword) =>
		paragraph.toLowerCase().includes(keyword.toLowerCase())
	);

	return <p className={isBold ? styles.bold : ""}>{paragraph}</p>;
};

const Detail = () => {
	const { id } = useParams();
	const foods = useSelector(foodsSelector);
	const food = foods.find((food) => food.id === Number(id));
	const lang = useSelector(languageSelector);

	if (!food) return <div>Some thing are wrong!</div>;

	const ingredientRendered = (
		<div className="accordion-item show">
			<h2 className="accordion-header">
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
				className="accordion-collapse collapse show"
				data-bs-parent="#accordionMain"
			>
				<div className="accordion-body fs-6">
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
				className="accordion-collapse collapse show"
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
		<div style={{ marginTop: 80 }}>
			<ToolBar />
			<div className="container">
				<h1 className="heading text-center py-2">{food.name[lang]}</h1>
				<p className="fs-5">{food.introduction[lang]}</p>
			</div>
			<PhotoListView food={food} />
			<div className="container fs-5 py-4">{accoridonRendered}</div>
		</div>
	);
};

export default Detail;
