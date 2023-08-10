import vnImg from "../../assets/img/vi.png";
import enImg from "../../assets/img/en.png";
import styles from "./welcome.module.css";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../app/langSlice";
import { useNavigate } from "react-router-dom";
import { setIsFirstTimeFalse } from "../../app/rootSlice";

const Welcome = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChooseLanguage = (lang: "en" | "vi") => {
		dispatch(changeLanguage(lang));
		dispatch(setIsFirstTimeFalse());
		navigate("/");
	};

	return (
		<div className={styles.welcome}>
			<h1 className="heading color-primary text-center animate__animated animate__bounceInDown">
				Welcome to Vietnamse Cookery
			</h1>

			<div className={styles.content}>
				<button
					onClick={() => handleChooseLanguage("en")}
					className={
						styles.button +
						" btn rounded-5 bg-danger-subtle w-100 animate__animated animate__fadeInLeft"
					}
				>
					<img src={enImg} />
					<span>English</span>
				</button>
				<button
					onClick={() => handleChooseLanguage("vi")}
					className={
						styles.button +
						" btn rounded-5 bg-danger-subtle w-100 animate__animated animate__fadeInRight"
					}
				>
					<img src={vnImg} />
					<span>Tiếng Việt</span>
				</button>
			</div>
		</div>
	);
};

export default Welcome;
