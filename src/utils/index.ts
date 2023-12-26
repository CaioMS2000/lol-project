import { normalizedNames } from "./_index";

export function isNumeric(str: string): boolean {
	return /^\d+$/.test(str);
}

export function toCapitalCase(str: string): string {
	return str.replace(
		/\w\S*/g,
		(txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	);
}

export function normalizeName(name: string){
	const normalizedName = normalizedNames[name]

	if(normalizedName) return normalizedName;

	return name
}