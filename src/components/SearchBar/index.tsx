import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import styles from "./searchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { languageSelector } from "../../app/selectors";
import { searchTextChange } from "../../app/rootSlice";

const SearchBar = () => {
	const dispatch = useDispatch();
	const language = useSelector(languageSelector);
	const [searchText, setSearchText] = useState("");

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const handleSearchTextChange = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(searchTextChange({ text: e.currentTarget.value }));
		setSearchText(e.currentTarget.value);
	};

	const handleRemoveSearchText = () => {
		setSearchText("");
		dispatch(searchTextChange({ text: "" }));
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
					value={searchText}
					placeholder={
						language == "en"
							? "Search for recipes"
							: "Tìm kiếm công thức"
					}
					onChange={handleSearchTextChange}
				/>
				{searchText && (
					<FaTimes
						className={styles.timesIcon}
						onClick={handleRemoveSearchText}
					/>
				)}
			</form>
		</div>
	);
};

export default SearchBar;
