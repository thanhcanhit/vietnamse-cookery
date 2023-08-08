interface Base {
	id: number;
	name: {
		vi: string;
		en: string;
	};
}

interface Step {
	name: {
		vi: string;
		en: string;
	};
	content: {
		vi: string ;
		en: string ;
	};
}

interface Food extends Base {
	introduction: { vi: string; en: string };
	imgPath: string[];
	ingredient: {
		vi: string[];
		en: string[];
	};
	steps: Step[];
	touristAttractions: number[];
}

interface TouristAttraction extends Base {
	imgPath: string[];
	introduction: {
		vi: string;
		en: string;
	};
}

export type { Food, TouristAttraction };
