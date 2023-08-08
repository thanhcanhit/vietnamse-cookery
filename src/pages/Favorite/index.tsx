import { useSelector } from "react-redux";
import { favoriteSelector } from "./favoriteSlice";
import { foodsSelector, languageSelector } from "../../app/selectors";
import { Link } from "react-router-dom";

const Favorite = () => {
	const favorites = useSelector(favoriteSelector);
	const foods = useSelector(foodsSelector);
	const favoriteFoods = foods.filter((food) => favorites.includes(food.id));
	const lang = useSelector(languageSelector);

	return (
		<div className="mt-4 px-2">
			<h1 className="heading text-center pb-2 color-primary">
				{lang === "en"
					? 'The dish you have "dropped your heart"'
					: 'Món ăn bạn đã "thả tim"'}
			</h1>
			{favoriteFoods.map((food) => (
				<Link to={`/food/${food.id}`} className="text-decoration-none ">
					<div className="card mb-3">
						<img
							src={food.imgPath[0]}
							className="card-img-top"
							alt=""
						/>
						<div className="card-body">
							<h5 className="card-title text-center heading">
								{food.name[lang]}
							</h5>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Favorite;
