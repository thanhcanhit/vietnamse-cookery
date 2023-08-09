import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MultiLanguage } from "../../types/interface";
import { languageSelector } from "../../app/langSlice";
import { currentFavoriteFood } from "../../app/selectors";

const emptyNotify: MultiLanguage = {
	en: 'Oh, there is no dish that you "drop your heart"',
	vi: 'Oh, chưa có món ăn nào được bạn "thả tim"',
};

const heading: MultiLanguage = {
	en: 'The dish you have "dropped your heart"',
	vi: 'Món ăn bạn đã "thả tim"',
};

const Favorite = () => {
	const favoriteFoods = useSelector(currentFavoriteFood);
	const language = useSelector(languageSelector);

	if (favoriteFoods.length === 0)
		return (
			<h2 className="heading text-center pt-5 color-primary">
				{emptyNotify[language]}
			</h2>
		);

	return (
		<div className="mt-4 px-2">
			<h2 className="heading text-center color-primary">
				{heading[language]}
			</h2>
			<hr />
			{favoriteFoods.map((food) => (
				<Link
					to={`/food/${food.id}`}
					className="text-decoration-none "
					key={food.id}
				>
					<div className="card mb-3">
						<img
							src={food.imgPath[0]}
							className="card-img-top"
							alt=""
						/>
						<div className="card-body">
							<h5 className="card-title text-center heading">
								{food.name[language]}
							</h5>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Favorite;
