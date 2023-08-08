import { Food } from "../../types/interface";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { languageSelector } from "../../app/selectors";
import PhotoListView from "./../../components/PhotoListView/index";
import { Language } from "../../app/langSlice";

type LovingType = {
	food: Food;
	onClick: (id: number) => void;
};

const LovingFood = ({ food, onClick }: LovingType) => {
	const language: Language = useSelector(languageSelector);

	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>
				{language === "en"
					? "What We're Loving Now"
					: "Món ăn được yêu thích"}
			</h2>
			<div className={styles.lovingFood}>
				<PhotoListView food={food} height={300} />
				<Link
					to={`/food/${food.id}`}
					style={{ textDecoration: "none" }}
					onClick={() => onClick(food.id)}
				>
					<h3 className={styles.lovingFoodName}>
						{food.name[language]}
					</h3>
				</Link>
			</div>
		</div>
	);
};

export default LovingFood;