import { useSelector } from "react-redux";
import SearchBar from "./../../components/SearchBar/index";
import styles from "./home.module.css";
import { foodsSelector } from "../../app/selectors";
import LovingFood from "./LovingFood";
import Trending from "./Trending";

const Home = () => {
	const foods = useSelector(foodsSelector);

	const randomNumber = Math.round(Math.random() * (foods.length - 1) + 1);
	const randomFood =
		foods.find((food) => food.id === randomNumber) || foods[0];

	return (
		<section className={styles.home}>
			<SearchBar />
			<main className={styles.content}>
				<LovingFood food={randomFood} />
				<Trending foods={foods} />
			</main>
		</section>
	);
};

export default Home;
