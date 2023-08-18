import { useSelector } from "react-redux";
import { currentFoodSelector } from "../../app/selectors";

const Restaurant = () => {
	const food = useSelector(currentFoodSelector);
	const restaurants = food?.restaurantPlace;

	if (!restaurants)
		return <h1 className="text-center py-2">Not found restaurants!</h1>;

	return (
		<div className="container py-2">
			<h1 className="heading text-center">
				Restaurants has <br />{" "}
				<span className="heading color-primary">{food?.name.en}</span>
			</h1>
			{restaurants?.map((item, index) => (
				<div key={item.name} className="mb-2">
					<button
						className="btn background-primary text-white w-100"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target={`#${index}}`}
					>
						<h2>{item.name}</h2>
					</button>
					<div>
						<div className="collapse show" id={`${index}}`}>
							{item.restaurants.map((restaurant) => (
								<div
									key={restaurant.name}
									className="my-2 p-4"
									style={{
										border: "2px solid #9d9393",
										borderRadius: 8,
									}}
								>
									<h3>{restaurant.name}</h3>
									<span style={{ fontStyle: "italic" }}>
										{restaurant.address}
									</span>
									<span>{restaurant.phoneNumber}</span>
									<br />
									<a href={restaurant.website}>Website</a>
									<br />
									<a href={restaurant.direction}>
										Get directions
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Restaurant;
