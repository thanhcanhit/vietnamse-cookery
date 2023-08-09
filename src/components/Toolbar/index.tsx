import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { isFavoriteFoodSelector } from "../../app/selectors";
import { toggleFavoriteItem } from "../../pages/Favorite/favoriteSlice";
import { changeLanguage, languageSelector } from "../../app/langSlice";
import { currentFoodViewSelector } from "../../app/rootSlice";
import viIcon from "../../assets/img/vi.png";
import enIcon from "../../assets/img/en.png";
import styles from "./toolbar.module.css";

const ToolBar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const language = useSelector(languageSelector);
	// Get current Food
	const currentFood = useSelector(currentFoodViewSelector);
	const isFavoriteItem = useSelector(isFavoriteFoodSelector);

	const handleBackClick = () => {
		navigate("/");
	};

	const handleFavoriteClick = () => {
		dispatch(toggleFavoriteItem({ id: currentFood }));
	};

	return (
		<div className={styles.toolbar}>
			<div
				className="d-flex align-items-center "
				onClick={handleBackClick}
			>
				<BiArrowBack />
			</div>
			<div className={styles.toolbarRight}>
				<div className={styles.langButton}>
					{language === "en" ? (
						<img
							src={enIcon}
							alt="en"
							onClick={() => dispatch(changeLanguage("vi"))}
						/>
					) : (
						<img
							src={viIcon}
							alt="vi"
							onClick={() => dispatch(changeLanguage("en"))}
						/>
					)}
				</div>
				<div
					className="d-flex align-items-center "
					onClick={handleFavoriteClick}
				>
					{isFavoriteItem ? <AiFillHeart /> : <AiOutlineHeart />}
				</div>
			</div>
		</div>
	);
};

export default ToolBar;
