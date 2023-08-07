import { NavLink } from "react-router-dom";
import { IconType } from "react-icons/lib/esm/iconBase";
import { PiCookingPotBold } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import styles from "./controlBar.module.css";
import { useSelector } from "react-redux";
import { languageSelector } from "../../app/selectors";

type ControlItem = {
	path: string;
	display: {
		vi: string;
		en: string;
	};
	icon: IconType;
};

const controlList: ControlItem[] = [
	{
		path: "/",
		display: {
			vi: "Khám phá",
			en: "Discovery",
		},
		icon: PiCookingPotBold,
	},
	{
		path: "/favorite",
		display: {
			vi: "Yêu thích",
			en: "Favorite",
		},
		icon: MdOutlineFavoriteBorder,
	},
];

const ControlBar = () => {
	const language = useSelector(languageSelector);
	return (
		<nav className={styles.controlBar}>
			{controlList.map((item: ControlItem) => (
				<NavLink
					key={item.path}
					to={item.path}
					className={({ isActive }) => {
						const draft = styles.controlItem;

						return isActive ? draft + " " + styles.active : draft;
					}}
				>
					{<item.icon className={styles.itemIcon} />}
					{
						<span className={styles.itemName}>
							{item.display[language]}
						</span>
					}
				</NavLink>
			))}
		</nav>
	);
};

export default ControlBar;
