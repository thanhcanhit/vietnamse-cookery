import { useDispatch, useSelector } from "react-redux";
import { currentCookingFoodSelector } from "../../app/selectors";
import {
	completeCooking,
	currentCookingStep,
	currentCookingSteps,
	downTime,
	nextStep,
	prevStep,
} from "./cookingSlice";
import PhotoListView from "./../PhotoListView/index";
import { secondToMinute } from "../../utility/timeTransfer";
import { useEffect, useState } from "react";
import { textToSpeech } from "../../utility/textToSpeech";
import { Link } from "react-router-dom";

export const Cooking = () => {
	const dispatch = useDispatch();
	const currentFoodCooking = useSelector(currentCookingFoodSelector);
	const steps = useSelector(currentCookingSteps);
	const currentStepIndexes = useSelector(currentCookingStep);
	const currentSteps = currentStepIndexes?.map((index) => steps[index]);
	const restTimeSteps = currentSteps?.map((step) =>
		secondToMinute(step.restTime)
	);

	const [isPause, setIsPause] = useState(false);
	const isLastStep = currentStepIndexes
		? currentStepIndexes[currentStepIndexes?.length - 1] ===
		  steps.length - 1
		: false;
	const [isComplete, setIsComplete] = useState(false);

	const handlePreviousClick = () => {
		setIsPause(true);
		dispatch(prevStep());
	};

	const handleNextClick = () => {
		setIsPause(false);
		dispatch(nextStep());
	};

	useEffect(() => {
		if (isPause) return;
		const toId = setTimeout(() => {
			if (currentSteps?.every((step) => step.restTime === 0))
				dispatch(nextStep());
			dispatch(downTime());
		}, 1000);

		return () => {
			clearTimeout(toId);
		};
	}, [currentSteps, dispatch, isPause]);

	useEffect(() => {
		currentSteps?.forEach((current) => {
			console.log(current.restTime, current.times);
			if (current.restTime === current.times) textToSpeech(current.title);
		});
	}, [currentStepIndexes, currentSteps]);

	useEffect(() => {
		currentSteps?.forEach((current) => {
			if (current.restTime == Math.floor(current.times / 2)) {
				return textToSpeech("it's been half the time");
			}
			if (current.restTime == 119) {
				return textToSpeech("2 minutes left");
			}
		});
	}, [currentSteps]);

	useEffect(() => {
		if (isComplete)
			textToSpeech(
				`Congratulations, you have successfully cooked ${currentFoodCooking?.name.en}. Bon apppetit!`
			);
	}, [currentFoodCooking?.name.en, isComplete]);

	if (!currentFoodCooking)
		return (
			<div>
				<h1 className="p-4 text-center ">
					Sorry, this dish is currently not available
				</h1>
			</div>
		);

	if (isComplete) {
		return (
			<div className="container my-4">
				<h1 className="text-center mb-5">
					Congratulations, you have successfully cooked <br />
					<span className="color-primary">
						"{currentFoodCooking.name.en}"
					</span>
				</h1>
				<PhotoListView imgPaths={currentFoodCooking.imgPath} />
				<h3 className="m-2 text-center">Bon apppetit!</h3>
				<Link to="/">
					<span
						className="d-block text-center fs-5"
						onClick={() => dispatch(completeCooking())}
					>
						Return home
					</span>
				</Link>
			</div>
		);
	}

	return (
		<div className="container ">
			<h1 className="color-primary text-center p-2 heading">
				{currentFoodCooking.name.en}
			</h1>
			<div
				style={{
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					paddingBottom: 120,
				}}
			>
				{currentSteps?.map((currentStep, index) => {
					if (!restTimeSteps) return;
					return (
						<div key={index}>
							<p className="text-center heading">
								{currentStep.title}
							</p>
							<div className="text-center heading">
								<h1
									className="color-primary"
									style={{ fontSize: "40px" }}
								>
									{restTimeSteps[index].minute == 0 &&
									restTimeSteps[index].second == 0
										? "Done"
										: `${
												restTimeSteps[index].minute <= 9
													? `0${restTimeSteps[index].minute}`
													: restTimeSteps[index]
															.minute
										  }:${
												restTimeSteps[index].second <= 9
													? `0${restTimeSteps[index].second}`
													: restTimeSteps[index]
															.second
										  }`}
								</h1>
							</div>

							<div className="mt-4 mb-auto">
								<PhotoListView imgPaths={currentStep.imgPath} />
							</div>
						</div>
					);
				})}

				<div
					className="d-flex flex-column gap-3 justify-content-center"
					style={{ marginTop: 32 }}
				>
					{isLastStep ? (
						<button
							className="btn btn-success p-2 w-full"
							onClick={() => {
								setIsComplete(true);
							}}
						>
							Complete
						</button>
					) : (
						<>
							<button
								className="btn btn-success p-2 w-full"
								onClick={handleNextClick}
							>
								Done, next step
							</button>
							<button
								className="btn p-2 w-full"
								onClick={handlePreviousClick}
								style={{
									color: "gray",
									textDecoration: "underline",
								}}
							>
								I have not completed the previous step
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
