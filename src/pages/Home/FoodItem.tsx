import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Food } from "../../types/interface";
import { Language, languageSelector } from "../../app/langSlice";
import styles from "./home.module.css";

type FoodItemType = {
	food: Food;
};

const FoodItem = ({ food }: FoodItemType) => {
	const language: Language = useSelector(languageSelector);
	return (
		<div key={food.id} className={styles.foodItemWrapper}>
			<Link to={`/food/${food.id}`} className="text-decoration-none">
				<div className={styles.foodItemContent}>
					<img
						style={{ objectFit: "cover", height: 120 }}
						src={food.imgPath[0]}
					/>
					<span className="bg-white">{food.name[language]}</span>
				</div>
			</Link>
		</div>
	);
};

export default FoodItem;
