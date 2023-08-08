import { useDispatch, useSelector } from "react-redux";
import { languageSelector } from "../../app/selectors";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import viIcon from "../../assets/img/vi.png";
import enIcon from "../../assets/img/en.png";
import styles from "./toolbar.module.css";
import { changeLanguage } from "../../app/langSlice";
import {
	favoriteSelector,
	toggleFavoriteItem,
} from "../../pages/Favorite/favoriteSlice";
import { currentFoodViewSelector } from "../../app/rootSlice";
const ToolBar = () => {
	const lang = useSelector(languageSelector);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentFood = useSelector(currentFoodViewSelector);
	const favorites = useSelector(favoriteSelector);
	const isFavoriteItem: boolean = favorites.includes(Number(currentFood));

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
					{lang === "en" ? (
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
