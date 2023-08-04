import { Food } from "../../assets/data/interface";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

type FoodItemType = {
	food: Food;
};

const FoodItem = ({ food }: FoodItemType) => {
	return (
		<div key={food.id} className={styles.trendingItemWrapper}>
			<Link to={`/food/${food.id}`} className="text-decoration-none ">
				<div className={styles.trendingItemContent}>
					<img
						style={{ objectFit: "cover", height: 120 }}
						src={food.imgPath[0]}
					/>
					<span>{food.name}</span>
				</div>
			</Link>
		</div>
	);
};

export default FoodItem;
