import { Food } from "../../types/interface";
import { useId } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PhotoListView = ({
	food,
	height = 300,
}: {
	food: Food;
	height?: number;
}) => {
	const carouselID = useId();
	const imgRendered = (
		<div id={carouselID} className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				{food.imgPath.map((path, index) => (
					<div
						key={path}
						className={`carousel-item ${
							index === 0 ? "active" : ""
						}`}
					>
						<PhotoView src={path} key={path} height={height}>
							<img
								style={{
									height: height,
									objectFit: "cover",
								}}
								src={path}
							/>
						</PhotoView>
					</div>
				))}
			</div>
		</div>
	);

	return (
		<PhotoProvider speed={() => 300} maskOpacity={0.6}>
			{imgRendered}
		</PhotoProvider>
	);
};

export default PhotoListView;
