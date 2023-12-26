export type ChampionsListDTO = string[]

export interface ChampionDTO{
    name: string
    title: string

    /**
     * Image buffer in String base64
     * @description String Base64
     */
    images: {
        profile: string,
        splash: string,
    }
}

export interface Champion extends ChampionDTO{

    skins: Skin[]
}

export interface Skin{
    /**
     * Image buffer in String base64
     * @description String Base64
     */
    image: string,
    name: string,
    chromas: boolean,
}