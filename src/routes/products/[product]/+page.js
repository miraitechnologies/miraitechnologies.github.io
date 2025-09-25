// Define product keys that match our JSON structure
const productKeys = [
	'asphalt_finisher',
	'automated_forklift',
	'digital_twin',
	'ai_workplace_assistants',
	'document_insights'
];

export async function entries() {
	// Generate all possible product routes
	return productKeys.map((product) => ({ product }));
}
