import { membersJP, membersEN } from '../../../lib/i18n/members.ts';

export async function entries() {
	// Generate all possible member routes for both languages
	const allMembers = [...membersJP, ...membersEN];
	
	// Create unique member keys (in case there are duplicates between languages)
	const memberKeys = new Set();
	
	allMembers.forEach(member => {
		const key = `${member.firstname.toLowerCase()}_${member.lastname.toLowerCase()}`.replace(/\s+/g, '_');
		memberKeys.add(key);
	});
	
	// Convert Set to array of objects for SvelteKit
	return Array.from(memberKeys).map(member => ({ member }));
}
