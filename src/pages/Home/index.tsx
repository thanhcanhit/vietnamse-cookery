import { useSelector } from "react-redux";
import SearchBar from "./../../components/SearchBar/index";
import styles from "./home.module.css";
import { foodsSelector, languageSelector } from "../../app/selectors";
import LovingFood from "./LovingFood";
import Trending from "./Trending";
import { MdFastfood } from "react-icons/md";
import FoodItem from "./FoodItem";

const Home = () => {
	const foods = useSelector(foodsSelector);
	const language: "en" | "vi" = useSelector(languageSelector);

	const randomNumber = Math.round(Math.random() * (foods.length - 1) + 1);
	const randomFood =
		foods.find((food) => food.id === randomNumber) || foods[0];

	const foodListRendered1 = foods.map((food) => (
		<div className="w-100 mt-3" key={food.id}>
			<FoodItem food={food} />
		</div>
	));
	const foodListRendered2 = foods.map((food) => (
		<div className="w-100 mt-3" key={food.id}>
			<FoodItem food={food} />
		</div>
	));

	return (
		<section className={styles.home}>
			<SearchBar />
			<main className={styles.content}>
				<LovingFood food={randomFood} />
				<Trending foods={foods} />
				<div className="container">
					<div className={styles.container}>
						<div className="d-flex align-items-center justify-content-center  gap-2 ">
							<h2 className="heading">
								{language === "en"
									? "And other delicious dishes"
									: "Và những món ngon khác"}
							</h2>{" "}
							<MdFastfood className="color-primary mb-1" />
						</div>
						<div className="row justify-content-center">
							<div className="col-6 p-0 pe-2">
								{foodListRendered1}
							</div>
							<div className="col-6 p-0 ps-2">
								{foodListRendered2}
							</div>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default Home;
