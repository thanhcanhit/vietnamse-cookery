import { NavLink } from "react-router-dom";
import { IconType } from "react-icons/lib/esm/iconBase";
import { PiCookingPotBold } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import styles from "./controlBar.module.css";

type ControlItem = {
	path: string;
	display: string;
	icon: IconType;
};

const controlList: ControlItem[] = [
	{
		path: "/",
		display: "Discovery",
		icon: PiCookingPotBold,
	},
	{
		path: "/favorite",
		display: "Favorite",
		icon: MdOutlineFavoriteBorder,
	},
];

const ControlBar = () => {
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
					{<span className={styles.itemName}>{item.display}</span>}
				</NavLink>
			))}
		</nav>
	);
};

export default ControlBar;
