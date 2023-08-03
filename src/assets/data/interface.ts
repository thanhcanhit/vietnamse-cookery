interface Object {
	id: string;
	name: string;
}

interface Food extends Object {
	description: string;
	imgPath: [string];
	ingredient: [string];
	steps: [string];
	processMaterials: string;
}

interface TouristAttraction extends Object {
	imgPath: [string];
	description: string;
}

interface Location extends Object {
	touristAttractions: [TouristAttraction];
}
