interface Food {
  id: string;
  name: string;
  description: string;
  ingredient: [string];
  steps: [string];
  processMaterials: string;
}

interface TouristAttraction {
  id: string;
  name: string;
  imgPath: string;
  description: string;
}

interface Location {
  id: string;
  name: string;
  touristAttractions: [TouristAttraction]
}