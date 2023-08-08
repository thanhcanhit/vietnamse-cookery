import { useDispatch, useSelector } from "react-redux";
import { languageSelector } from "../../app/selectors";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineHeart,  } from "react-icons/ai"; // AiFillHeart
import viIcon from "../../assets/img/vi.png";
import enIcon from "../../assets/img/en.png";
import styles from "./details.module.css";
import { changeLanguage } from "../../app/langSlice";
import { setCurrentFoodView } from "../../app/rootSlice";
const ToolBar = () => {
	const lang = useSelector(languageSelector);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleBackClick = () => {
		navigate("/");
		dispatch(setCurrentFoodView({ id: null }));
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
				<AiOutlineHeart />
			</div>
		</div>
	);
};

export default ToolBar;
