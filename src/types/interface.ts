interface Base {
	id: number;
	name: MultiLanguage;
}

interface MultiLanguage {
	vi: string;
	en: string;
}

interface MultiLanguageArray {
	vi: string[];
	en: string[];
}

interface Step {
	name: MultiLanguage;
	content: MultiLanguage;
}

interface Restaurant {
	name: string;
	website: string;
	phoneNumber: string;
	direction: string;
	address: string;
}

interface RestaurantPlace {
	name: string;
	restaurants: Restaurant[];
}

interface Food extends Base {
	introduction: MultiLanguage;
	imgPath: string[];
	ingredient: MultiLanguageArray;
	steps: Step[];
	touristAttractions: number[];
	script?: CookingScript;
	restaurantPlace?: RestaurantPlace[];
}

interface TouristAttraction extends Base {
	imgPath: string[];
	introduction: MultiLanguage;
	mapLink?: string;
}

interface CookingStep {
	title: string;
	times: number;
	imgPath: string[];
	withNextStep?: boolean;
	waitTime?: number;
}

interface CookingScript {
	steps: CookingStep[];
}

export type { Food, TouristAttraction, MultiLanguage, CookingStep };
