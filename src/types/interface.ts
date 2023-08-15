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

interface Food extends Base {
	introduction: MultiLanguage;
	imgPath: string[];
	ingredient: MultiLanguageArray;
	steps: Step[];
	touristAttractions: number[];
	script?: CookingScript;
}

interface TouristAttraction extends Base {
	imgPath: string[];
	introduction: MultiLanguage;
}

interface CookingStep {
	title: string;
	times: number;
	imgPath: string[];
	withNextStep?: boolean;
}

interface CookingScript {
	steps: CookingStep[];
}

export type { Food, TouristAttraction, MultiLanguage, CookingStep };
