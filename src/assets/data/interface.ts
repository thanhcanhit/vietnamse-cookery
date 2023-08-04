interface Base {
	id: number;
	name: string;
}

interface Step {
	name: string;
	content: string | string[]
}

interface Food extends Base {
	description: string;
	imgPath: string[];
	ingredient: string[];
	steps: Step[];
	touristAttractions: number[];
}

interface TouristAttraction extends Base {
	imgPath: string[];
	description: string;
}

export type { Food, TouristAttraction };
