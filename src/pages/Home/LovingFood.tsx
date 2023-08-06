import { Food } from "../../types/interface";
import { useState } from "react";
import styles from "./home.module.css";
import { PhotoSlider } from "react-photo-view";
import { Link } from "react-router-dom";

type LovingType = {
	food: Food;
};

const LovingFood = ({ food }: LovingType) => {
	const [index, setIndex] = useState(0);
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
				index={index}
				onIndexChange={setIndex}
				onClose={() => {
					setVisible(false);
					setIndex(0);
				}}
				maskOpacity={0.8}
			/>{" "}
		</div>
	);
};

export default LovingFood;
