import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MultiLanguage } from "../../types/interface";
import { languageSelector } from "../../app/langSlice";
import { setCurrentFoodView } from "../../app/rootSlice";
import { currentFavoriteFood } from "../../app/selectors";
import emptyImg from "../../assets/img/empty.jpg";

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

	const dispatch = useDispatch();

	// Set current food view to null when go to home
	useEffect(() => {
		dispatch(setCurrentFoodView({ id: null }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (favoriteFoods.length === 0)
		return (
			<div className="d-flex flex-column align-items-center justify-content-center p-4">
				<h3 className="heading text-center pt-5 color-primary">
					{emptyNotify[language]}
				</h3>
				<img src={emptyImg} />
			</div>
		);

	return (
		<div className="mt-4 px-2">
			<h3 className="heading text-center color-primary px-2 animate__animated animate__fadeIn">
				{heading[language]} ❤️
			</h3>
			<hr />
			{favoriteFoods.map((food) => (
				<Link
					to={`/food/${food.id}`}
					className="text-decoration-none"
					key={food.id}
				>
					<div className="card mb-3 animate__animated animate__fadeInUp">
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
