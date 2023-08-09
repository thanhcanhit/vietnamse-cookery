import { Food, MultiLanguage } from "../../types/interface";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PhotoListView from "./../../components/PhotoListView/index";
import { Language, languageSelector } from "../../app/langSlice";

type LovingType = {
	food: Food;
};

const heading: MultiLanguage = {
	vi: "Món ăn được yêu thích",
	en: "What We're Loving Now",
};

const LovingFood = ({ food }: LovingType) => {
	const language: Language = useSelector(languageSelector);

	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>{heading[language]}</h2>
			<div className={styles.lovingFood}>
				<PhotoListView imgPaths={food.imgPath} height={300} />
				<Link
					to={`/food/${food.id}`}
					style={{ textDecoration: "none" }}
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
