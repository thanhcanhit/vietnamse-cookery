import { useSelector } from "react-redux";
import { Food } from "../../types/interface";
import FoodItem from "./FoodItem";
import styles from "./home.module.css";
import { WiStars } from "react-icons/wi";
import { languageSelector } from "../../app/selectors";
import { Language } from "../../app/langSlice";

type TrendingType = {
	foods: Food[];
	onClick: (id: number) => void;
};

const Trending = ({ foods, onClick }: TrendingType) => {
	const foodListRendered = foods.map((food) => (
		<FoodItem food={food} key={food.id} onClick={() => onClick(food.id)} />
	));

	const language: Language = useSelector(languageSelector);
	return (
		<div>
			<div className="container mb-2">
				<h2 className="heading">
					{language === "en" ? "Trending" : "Xu hướng"}{" "}
					<WiStars className="color-primary fs-2 " />
				</h2>
			</div>
			<div className={styles.horizontalScroll}>{foodListRendered}</div>
		</div>
	);
};

export default Trending;