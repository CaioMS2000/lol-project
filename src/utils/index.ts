export function isNumeric(str: string): boolean {
	return /^\d+$/.test(str);
}

export function toCapitalCase(str: string): string {
	return str.replace(
		/\w\S*/g,
		(txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	);
}
