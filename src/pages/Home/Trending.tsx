import { useSelector } from "react-redux";
import { Food, MultiLanguage } from "../../types/interface";
import FoodItem from "./FoodItem";
import styles from "./home.module.css";
import { WiStars } from "react-icons/wi";

import { Language, languageSelector } from "../../app/langSlice";

type TrendingType = {
	foods: Food[];
};

const heading: MultiLanguage = {
	vi: "Xu hướng",
	en: "Trending",
};

const Trending = ({ foods }: TrendingType) => {
	const foodListRendered = foods.map((food) => (
		<FoodItem food={food} key={food.id} />
	));

	const language: Language = useSelector(languageSelector);
	return (
		<div>
			<div className="container mb-2">
				<h2 className="heading text-center">
					{heading[language]}
					<WiStars className="color-primary fs-2 " />
				</h2>
			</div>
			<div className={styles.horizontalScroll}>{foodListRendered}</div>
		</div>
	);
};

export default Trending;
