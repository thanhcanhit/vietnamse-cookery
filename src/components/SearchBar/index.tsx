import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./searchBar.module.css";

const SearchBar = () => {
	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submit");
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className={`${styles.searchBar} mb-3 p-2`}>
        <BiSearchAlt2 className={styles.searchIcon} onClick={handleFormSubmit}/>
				<input
					type="text"
					className={`${styles.searchInput} form-control rounded-5`}
					placeholder="Search for recipes"
				/>
			</div>
		</form>
	);
};

export default SearchBar;
