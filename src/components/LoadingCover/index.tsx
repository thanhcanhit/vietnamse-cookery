import logoSrc from "./logo.jpg";

const LoadingCover = () => {
	return (
		<div
			className="position-fixed inset-0 d-flex flex-column align-items-center justify-content-between"
			style={{
				backgroundColor: "#1C5661",
				height: "100vh",
				padding: "80px 20px",
			}}
		>
			<div>
				<img
					src={logoSrc}
					className="d-block w-100"
					style={{ borderRadius: 8 }}
				/>
			</div>
			<div className="spinner-border text-light" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default LoadingCover;
