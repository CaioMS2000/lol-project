export interface LightChampion {
	name: string;
	title: string;

	/**
	 * Image buffer in String base64
	 * @description String Base64
	 */
	images: {
		profile: string;
		splash: string;
	};

	spells:{
		q: Spell,
		w: Spell,
		e: Spell,
		r: Spell,
		p: Spell,
	}
}

export interface Champion extends LightChampion {
	skins: Skin[];
}

export interface Skin {
	/**
	 * Image buffer in String base64
	 * @description String Base64
	 */
	image: string;
	name: string;
	chromas: boolean;
}

export interface Spell {
	name: string;
	image?: string;
	description: string;
}