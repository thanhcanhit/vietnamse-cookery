import { Food } from "../../types/interface";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { useSelector } from "react-redux";
import { languageSelector } from "../../app/selectors";

type FoodItemType = {
	food: Food;
};

const FoodItem = ({ food }: FoodItemType) => {
	const language: "en" | "vi" = useSelector(languageSelector);
	return (
		<div key={food.id} className={styles.trendingItemWrapper}>
			<Link to={`/food/${food.id}`} className="text-decoration-none ">
				<div className={styles.trendingItemContent}>
					<img
						style={{ objectFit: "cover", height: 120 }}
						src={food.imgPath[0]}
					/>
					<span>{food.name[language]}</span>
				</div>
			</Link>
		</div>
	);
};

export default FoodItem;
