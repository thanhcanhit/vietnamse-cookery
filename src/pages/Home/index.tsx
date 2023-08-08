import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./../../components/SearchBar/index";
import styles from "./home.module.css";
import { foodsSelector, languageSelector } from "../../app/selectors";
import LovingFood from "./LovingFood";
import Trending from "./Trending";
import { MdFastfood } from "react-icons/md";
import FoodItem from "./FoodItem";
import {
	searchTextChange,
	searchTextSelector,
	setCurrentFoodView,
} from "../../app/rootSlice";
import { Language } from "../../app/langSlice";
import { removeAccents } from "../../utility/textTransfer";

const Home = () => {
	let foods = useSelector(foodsSelector);
	const language: Language = useSelector(languageSelector);
	const dispatch = useDispatch();
	const searchText = useSelector(searchTextSelector);

	const randomNumber = Math.round(Math.random() * (foods.length - 1) + 1);
	const lovingFood =
		foods.find((food) => food.id === randomNumber) || foods[0];

	function handleChangeCurrentFoodView(id: number) {
		dispatch(setCurrentFoodView({ id }));
		dispatch(searchTextChange({ text: "" }));
	}

	// Tìm bắt đầu bằng search text (bỏ dấu và chuyển thành chữ thường)
	if (searchText)
		foods = foods.filter((food) =>
			removeAccents(food.name[language].toLowerCase()).startsWith(
				removeAccents(searchText.toLowerCase())
			)
		);

	const foodListRendered1 = foods.map((food, index) => {
		if (index > Math.ceil(foods.length / 2) - 1) return null;
		return (
			<div className="w-100 mt-3" key={food.id}>
				<FoodItem
					food={food}
					onClick={() => handleChangeCurrentFoodView(food.id)}
				/>
			</div>
		);
	});
	const foodListRendered2 = foods.map((food, index) => {
		if (index <= Math.ceil(foods.length / 2) - 1) return null;
		return (
			<div className="w-100 mt-3" key={food.id}>
				<FoodItem
					food={food}
					onClick={() => handleChangeCurrentFoodView(food.id)}
				/>
			</div>
		);
	});

	return (
		<section className={styles.home}>
			<SearchBar />
			<main className={styles.content}>
				{!searchText && (
					<>
						<LovingFood
							food={lovingFood}
							onClick={handleChangeCurrentFoodView}
						/>
						<Trending
							foods={foods}
							onClick={handleChangeCurrentFoodView}
						/>
					</>
				)}
				{foods.length > 0 ? (
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
				) : (
					<p className="heading text-center p-2 fs-5">
						{language === "en"
							? `Couldn't find a recipe related to the keyword "${searchText}"`
							: `Không tìm thấy công thức liên quan đến từ khóa "${searchText}"`}
					</p>
				)}
			</main>
		</section>
	);
};

export default Home;
