import { createSelector } from "@reduxjs/toolkit";
import { favoriteSelector } from "../pages/Favorite/favoriteSlice";
import { currentFoodViewSelector } from "./rootSlice";
import {
	foodsSelector,
	touristAttractionSelector,
} from "../assets/data/dataSlice";
import { currentCookingFoodId } from "../components/Cooking/cookingSlice";

// Favorite food selector
const isFavoriteFoodSelector = createSelector(
	favoriteSelector,
	currentFoodViewSelector,
	(favorites, currentId) => {
		return favorites.includes(Number(currentId));
	}
);

// Current food
const currentFoodSelector = createSelector(
	foodsSelector,
	currentFoodViewSelector,
	(foods, currentId) => {
		return foods.find((food) => food.id === currentId);
	}
);

const currentCookingFoodSelector = createSelector(
	foodsSelector,
	currentCookingFoodId,
	(foods, currentId) => {
		if (!currentId) return null;
		return foods.find((food) => food.id === currentId);
	}
);

// Current tourristList
const currentFoodTouristList = createSelector(
	currentFoodSelector,
	touristAttractionSelector,
	(food, tourists) => {
		return tourists.filter((tourist) =>
			food?.touristAttractions.includes(tourist.id)
		);
	}
);

const currentFavoriteFood = createSelector(
	foodsSelector,
	favoriteSelector,
	(foods, favoriteSelector) => {
		return foods.filter((food) => favoriteSelector.includes(food.id));
	}
);

export {
	isFavoriteFoodSelector,
	currentFoodSelector,
	currentFoodTouristList,
	currentFavoriteFood,
	currentCookingFoodSelector,
};
