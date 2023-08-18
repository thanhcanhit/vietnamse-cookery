import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CookingStep } from "../../types/interface";

interface CookingStepTimer extends CookingStep {
	restTime: number;
}

const initialState: {
	currentFoodId: number | null;
	steps: CookingStepTimer[];
	currentSteps: number[] | null;
} = { currentFoodId: null, steps: [], currentSteps: null };

const cookingSlice = createSlice({
	name: "cooking",
	initialState: initialState,
	reducers: {
		currentFoodIdChange: (state, action) => {
			if (!action.payload.steps)
				return {
					currentFoodId: null,
					currentSteps: null,
					steps: [],
				};

			state.currentFoodId = action.payload.id;
			state.currentSteps = [0];

			action.payload.steps.forEach((item: CookingStep) =>
				state.steps.push({ ...item, restTime: item.times })
			);
		},
		setSteps: (state, action) => {
			action.payload.steps.forEach((item: CookingStep) =>
				state.steps.push({ ...item, restTime: item.times })
			);
		},
		nextStep: (state) => {
			if (state.currentSteps == null) return;
			const lastStep = state.currentSteps[state.currentSteps.length - 1];
			if (lastStep < state.steps.length - 1) {
				// set buoc truoc do = 0
				state.currentSteps.forEach(
					(index) => (state.steps[index].restTime = 0)
				);
				// Them moi
				state.currentSteps.push(lastStep + 1);

				// Neu lam chung buoc sau thi them luon buoc sau
				if (state.steps[lastStep + 1].withNextStep)
					state.currentSteps.push(lastStep + 2);

				if (state.steps[state.currentSteps[0]].withNextStep)
					state.currentSteps.shift();
				state.currentSteps.shift();
			}
		},
		prevStep: (state) => {
			if (state.currentSteps == null) return;
			const firstStep = state.currentSteps[0];
			if (firstStep > 0) {
				state.currentSteps = [firstStep - 1];
			}
		},
		downTime: (state) => {
			if (state.currentSteps == null || state.steps == null)
				return initialState;
			state.currentSteps.forEach((currentStep) => {
				const restTime = state.steps[currentStep].restTime;
				if (restTime && restTime > 0)
					state.steps[currentStep].restTime--;
			});
		},
		completeCooking: () => {
			return initialState;
		},
	},
});

// Selector
const currentCookingFoodId = (state: RootState) => state.cooking.currentFoodId;
const currentCookingStep = (state: RootState) => state.cooking.currentSteps;
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
