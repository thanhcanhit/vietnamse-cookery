import { useId } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PhotoListView = ({
	imgPaths,
	height = 300,
}: {
	imgPaths: string[];
	height?: number;
}) => {
	const carouselID = useId();
	const imgRendered = (
		<div id={carouselID} className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				{imgPaths.map((path, index) => (
					<div
						key={path}
						className={`carousel-item ${
							index === 0 ? "active" : ""
						}`}
					>
						<PhotoView src={path} key={path} height={height}>
							<img
								style={{
									width: "100%",
									height: height,
									objectFit: "cover",
								}}
								src={path}
							/>
						</PhotoView>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target={`#${carouselID}`}
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target={`#${carouselID}`}
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
	return (
		<PhotoProvider speed={() => 300} maskOpacity={0.6}>
			{imgRendered}
		</PhotoProvider>
	);
};

export default PhotoListView;
