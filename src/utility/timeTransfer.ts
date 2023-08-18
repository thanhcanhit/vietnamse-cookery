const secondToMinute = (seconds: number) => {
	return {
		minute: Math.floor(seconds / 60),
		second: seconds % 60,
	};
};

export { secondToMinute };
