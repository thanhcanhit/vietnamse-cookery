import { Food } from "../../assets/data/interface";
import { useState } from "react";
import styles from "./home.module.css";
import { PhotoSlider } from "react-photo-view";
import { Link } from "react-router-dom";


type LovingType = {
	food: Food;
};

const LovingFood = ({ food }: LovingType) => {
	const [visible, setVisible] = useState(false);

	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>What We're Loving Now</h2>
			<div className={styles.lovingFood}>
				<div>
					<img
						style={{
							height: 300,
							objectFit: "cover",
						}}
						onClick={() => setVisible(true)}
						src={food.imgPath[0]}
					/>
				</div>
				<Link
					to={`/food/${food.id}`}
					style={{ textDecoration: "none" }}
				>
					<h3 className={styles.lovingFoodName}>{food.name}</h3>
				</Link>
			</div>
			<PhotoSlider
				images={food.imgPath.map((item) => ({
					src: item,
					key: item,
				}))}
				visible={visible}
				onClose={() => setVisible(false)}
				maskOpacity={0.8}
			/>{" "}
		</div>
	);
};

export default LovingFood;
