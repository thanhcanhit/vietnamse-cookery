const secondToMinute = (seconds: number) => {
	return {
		minute: seconds / 60,
		second: seconds % 60,
	};
};

export {secondToMinute};