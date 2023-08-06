import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./searchBar.module.css";

const SearchBar = () => {
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
					placeholder="Search for recipes"
				/>
			</form>
		</div>
	);
};

export default SearchBar;
