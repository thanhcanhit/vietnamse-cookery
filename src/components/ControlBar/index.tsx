import { NavLink } from "react-router-dom";
import styles from "./controlBar.module.css";

type ControlItem = {
	path: string;
	display: string;
};

const controlList: ControlItem[] = [
	{
		path: "/",
		display: "Discovery",
	},
	{
		path: "/favorite",
		display: "Favorite",
	},
];

const ControlBar = () => {
	return (
		<nav className={styles.controlBar}>
			{controlList.map((item: ControlItem) => (
				<NavLink
					key={item.path}
					to={item.path}
					className={({ isActive }) =>
						isActive
							? `${styles.controlItem} ${styles.active}`
							: styles.controlItem
					}
				>
					{item.display}
				</NavLink>
			))}
		</nav>
	);
};

export default ControlBar;
