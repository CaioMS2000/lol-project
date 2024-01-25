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

export function normalizeName(name: string, exceptions?: string[]){
	const normalizedName = normalizedNames[name]

	if(!exceptions && normalizedName) return normalizedName;

	if(exceptions){
		if(exceptions.includes(name)){
			return name
		}else{
			return normalizedName
		}
	}

	return name
}

export async function fetchData<T=any>(url: string, options?:Record<string, string>){
	const res = await fetch(url, options)
	const data: T = await res.json()

	return data
}