import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons/lib/esm/iconBase";
import { PiCookingPotBold } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { currentFoodViewSelector } from "../../app/rootSlice";
import { languageSelector } from "../../app/langSlice";
import { MultiLanguage } from "../../types/interface";
import styles from "./controlBar.module.css";

type ControlItem = {
	path: string;
	display: MultiLanguage;
	primary?: boolean;
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
		path: "/food/",
		display: {
			vi: "Bắt Đầu",
			en: "Start Cook",
		},
		primary: true,
		icon: FaPlay,
	},
	{
		path: "/location",
		display: {
			vi: "Du lịch",
			en: "Travel",
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
						let draft = styles.controlItem;
						if (item.primary)
							return (draft +=
								" background-primary text-white rounded ");
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
