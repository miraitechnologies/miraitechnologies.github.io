import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the members data from JSON file
let membersJP = [];
let membersEN = [];

try {
	const membersData = JSON.parse(fs.readFileSync('./scripts/members-data.json', 'utf8'));
	membersJP = membersData.membersJP || [];
	membersEN = membersData.membersEN || [];
} catch (error) {
	console.error('Error reading members data:', error);
	// Fallback: define the members data directly
	membersJP = [];
	membersEN = [];
}

// Product keys
const productKeys = [
	'asphalt_finisher',
	'automated_forklift',
	'digital_twin',
	'ai_workplace_assistants',
	'document_insights'
];

// Read the main index.html
const indexHtml = fs.readFileSync('./build/index.html', 'utf8');

// Generate team member routes
const allMembers = [...membersJP, ...membersEN];
const memberKeys = new Set();

allMembers.forEach((member) => {
	const key = `${member.firstname.toLowerCase()}_${member.lastname.toLowerCase()}`.replace(
		/\s+/g,
		'_'
	);
	memberKeys.add(key);
});

// Create team member directories and index.html files
memberKeys.forEach((memberKey) => {
	const dirPath = `./build/team/${memberKey}`;
	fs.mkdirSync(dirPath, { recursive: true });
	fs.writeFileSync(`${dirPath}/index.html`, indexHtml);
	console.log(`Created: /team/${memberKey}/index.html`);
});

// Create product directories and index.html files
productKeys.forEach((productKey) => {
	const dirPath = `./build/products/${productKey}`;
	fs.mkdirSync(dirPath, { recursive: true });
	fs.writeFileSync(`${dirPath}/index.html`, indexHtml);
	console.log(`Created: /products/${productKey}/index.html`);
});

console.log('All routes generated successfully!');
