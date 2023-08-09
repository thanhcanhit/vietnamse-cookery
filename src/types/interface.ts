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
}

interface TouristAttraction extends Base {
	imgPath: string[];
	introduction: MultiLanguage;
}

export type { Food, TouristAttraction, MultiLanguage };
