import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdFastfood } from "react-icons/md";
import SearchBar from "./../../components/SearchBar";
import LovingFood from "./LovingFood";
import Trending from "./Trending";
import FoodItem from "./FoodItem";
import { MultiLanguage } from "../../types/interface";
import {
	searchTextChange,
	searchTextSelector,
	setCurrentFoodView,
} from "../../app/rootSlice";
import { Language, languageSelector } from "../../app/langSlice";
import { foodsSelector } from "../../assets/data/dataSlice";
import { removeAccents } from "../../utility/textTransfer";
import styles from "./home.module.css";

const heading1: MultiLanguage = {
	vi: "Và những món ngon khác",
	en: "And other delicious dishes",
};
const searchNotFoundMessage: MultiLanguage = {
	vi: "Không tìm thấy công thức liên quan đến từ khóa",
	en: "Couldn't find a recipe related to the keyword",
};

const Home = () => {
	let foods = useSelector(foodsSelector);
	const language: Language = useSelector(languageSelector);
	const dispatch = useDispatch();
	const searchText = useSelector(searchTextSelector);

	// Generate random number to be used for loving food
	const randomNumber = Math.round(Math.random() * (foods.length - 1) + 1);
	const lovingFood =
		foods.find((food) => food.id === randomNumber) || foods[0];

	// Set current food view to null when go to home
	useEffect(() => {
		dispatch(setCurrentFoodView({ id: null }));

		return () => {
			dispatch(searchTextChange({ text: "" }));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Search startWith
	if (searchText)
		foods = foods.filter((food) =>
			removeAccents(food.name[language].toLowerCase()).startsWith(
				removeAccents(searchText.toLowerCase())
			)
		);

	// Render col 1
	const foodListRendered1 = foods.map((food, index) => {
		if (index > Math.ceil(foods.length / 2) - 1) return null;
		return (
			<div className="w-100 mt-3" key={food.id}>
				<FoodItem food={food} />
			</div>
		);
	});

	// Render col 2
	const foodListRendered2 = foods.map((food, index) => {
		if (index <= Math.ceil(foods.length / 2) - 1) return null;
		return (
			<div className="w-100 mt-3" key={food.id}>
				<FoodItem food={food} />
			</div>
		);
	});

	return (
		<section className={styles.home}>
			<SearchBar />
			<main className={styles.content}>
				{!searchText && (
					<>
						<LovingFood food={lovingFood} />
						<Trending foods={foods} />
					</>
				)}
				{foods.length > 0 ? (
					<div className="container">
						<div className={styles.container}>
							<div className="d-flex align-items-center justify-content-center  gap-2 ">
								<h2 className="heading">
									{heading1[language]}
								</h2>
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
				) : (
					<p className="heading text-center p-2 fs-5">
						{searchNotFoundMessage[language] + `"${searchText}"`}
					</p>
				)}
			</main>
		</section>
	);
};

export default Home;
