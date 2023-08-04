import { Food } from "../../assets/data/interface";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
type TrendingType = {
	foods: Food[];
};

const Trending = ({ foods }: TrendingType) => {
	return (
		<>
			<div className="container mb-2">
				<h2 className="heading">Trending</h2>
			</div>
			<div className={styles.horizontalScroll}>
				{foods.map((food) => (
					<div key={food.id} className={styles.trendingItemWrapper}>
						<Link
							to={`/food/${food.id}`}
							className="text-decoration-none "
						>
							<div className={styles.trendingItemContent}>
								<img
									style={{ objectFit: "cover", height: 120 }}
									src={food.imgPath[0]}
								/>
								<span>{food.name}</span>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default Trending;
