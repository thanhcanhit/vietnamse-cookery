import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./searchBar.module.css";
import { useSelector } from "react-redux";
import { languageSelector } from "../../app/selectors";

const SearchBar = () => {
	const language = useSelector(languageSelector);
	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submit");
	};

	return (
		<div className={`${styles.searchBar} px-2 py-3`}>
			<form onSubmit={handleFormSubmit}>
				<BiSearchAlt2
					className={styles.searchIcon}
					onClick={handleFormSubmit}
				/>
				<input
					type="text"
					className={`${styles.searchInput} form-control rounded-5`}
					placeholder={language == "en" ? "Search for recipes" : "Tìm kiếm công thức"}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
