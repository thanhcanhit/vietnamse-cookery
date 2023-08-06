import { Food } from "../../types/interface";
import FoodItem from "./FoodItem";
import styles from "./home.module.css";
import { WiStars } from "react-icons/wi";

type TrendingType = {
	foods: Food[];
};

const Trending = ({ foods }: TrendingType) => {
	const foodListRendered = foods.map((food) => <FoodItem food={food} key={food.id} />);

	return (
		<div>
			<div className="container mb-2">
				<h2 className="heading">
					Trending <WiStars className="color-primary fs-2 " />
				</h2>
			</div>
			<div className={styles.horizontalScroll}>{foodListRendered}</div>
		</div>
	);
};

export default Trending;
