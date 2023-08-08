import { NavLink } from "react-router-dom";
import { IconType } from "react-icons/lib/esm/iconBase";
import { PiCookingPotBold } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import styles from "./controlBar.module.css";
import { useSelector } from "react-redux";
import { languageSelector } from "../../app/selectors";
import { currentFoodViewSelector } from "../../app/rootSlice";

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

const controlList2: ControlItem[] = [
	{
		path: "/food",
		display: {
			vi: "Công thức",
			en: "Recipe",
		},
		icon: FiBookOpen,
	},
	{
		path: "/location",
		display: {
			vi: "Du lịch cùng món ăn",
			en: "Travel with food",
		},
		icon: IoLocationOutline,
	},
];

const ControlBar = () => {
	const language = useSelector(languageSelector);
	const currentFoodViewId = useSelector(currentFoodViewSelector);

	const itemList = currentFoodViewId ? controlList2 : controlList;

	return (
		<nav className={styles.controlBar}>
			{itemList.map((item: ControlItem) => (
				<NavLink
					key={item.path}
					to={
						currentFoodViewId
							? `${item.path}/${currentFoodViewId}`
							: item.path
					}
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
