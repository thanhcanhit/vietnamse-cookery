import { createSlice } from "@reduxjs/toolkit";
import store, { RootState } from "../../app/store";
import { CookingStep } from "../../types/interface";

const initialState: {
	currentFoodId: number | null;
	steps: CookingStep[];
	currentStep: number | null;
} = { currentFoodId: null, steps: [], currentStep: null };

const cookingSlice = createSlice({
	name: "cooking",
	initialState: initialState,
	reducers: {
		currentFoodIdChange: (state, action) => {
			if (!action.payload.steps) return;
			state.currentFoodId = action.payload.id;
			state.currentStep = 0;
			state.steps = action.payload.steps;
		},
		setSteps: (state, action) => {
			state.steps = action.payload.steps;
		},
		nextStep: (state) => {
			if (
				state.currentStep &&
				state.currentStep < state.steps.length - 1
			) {
				state.currentStep++;
			}
		},
		prevStep: (state) => {
			if (
				state.currentStep &&
				state.currentStep < state.steps.length - 1
			) {
				state.currentStep++;
			}
		},
		downTime: (state, action) => {
			if (!state.currentStep) return initialState;
			if (
				state.steps[state.currentStep].times -
					action.payload.quantity >=
				0
			)
				state.steps[state.currentStep].times -= action.payload.quantity;
		},
		completeCooking: () => {
			return initialState;
		},
	},
});

// Selector
const currentCookingFoodId = (state: RootState) => state.cooking.currentFoodId;
const currentCookingStep = (state: RootState) => state.cooking.currentStep;
const currentCookingSteps = (state: RootState) => state.cooking.steps;

export { currentCookingFoodId, currentCookingStep, currentCookingSteps };

export const {
	currentFoodIdChange,
	setSteps,
	nextStep,
	prevStep,
	downTime,
	completeCooking,
} = cookingSlice.actions;

export default cookingSlice.reducer;
