import { generateCookieID } from './generateCookieID';


describe('generateCookieUUID', () => {
	// Test case
	test('should generate a valid UUID', () => {
			// Generate UUID
			const uuid = generateCookieID();
			// UUID pattern to match
			const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
			// Assert if the generated UUID matches the pattern
			expect(uuid).toMatch(uuidPattern);
	});
});