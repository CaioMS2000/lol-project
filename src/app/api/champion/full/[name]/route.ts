import { basePath } from "@/constants";
import { Champion, Skin, Spell } from "@/dto/models";
import { objectHasInvalidValue, normalizeName, toCapitalCase } from "@/utils";
import * as fs from "fs";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameSplited = pathname.split("/");
	const requestedChampion = pathnameSplited[pathnameSplited.length - 1];

	// factories úteis
	function makeSpellId(spell: Record<string, string>){
		const idExceptions = ['ApheliosQ', 'ApheliosE']
		let exceptionIndex = -1;
		const isException = idExceptions.some((excp, index) => {
			const flag = spell.id.includes(excp)

			if(flag){
				exceptionIndex = index
			}

			return flag
		})
		const spellId = isException?idExceptions[exceptionIndex].slice(-1).toLocaleLowerCase():spell.id.slice(-1).toLocaleLowerCase();

		return {
			id: spellId,
			isException,
		}
	}
	// ####

	// Leitura do arquivo bruto
	const res = JSON.parse(
		fs.readFileSync(
			`${basePath}/game/data/pt_BR/champion/${requestedChampion}.json`,
			"utf8"
		)
	)["data"][requestedChampion];

	// Construindo informações básicas
	const champion = {} as Champion;
	const championProfileImage = fs.readFileSync(
		`${basePath}/game/img/champion/${requestedChampion}.png`
	);
	const championSplashImage = fs.readFileSync(
		`${basePath}/img/champion/splash/${normalizeName(
			requestedChampion
		)}_0.jpg`
	);

	champion["name"] = res["name"];
	champion["title"] = toCapitalCase(res["title"]);
	champion["images"] = {
		profile: Buffer.from(championProfileImage).toString("base64"),
		splash: Buffer.from(championSplashImage).toString("base64"),
	};

	// Construindo skins
	const skinsRef: any[] = res["skins"];
	const skins: Skin[] = [];

	skinsRef.forEach((sRef) => {
		const championSplashSkinImage = fs.readFileSync(
			`${basePath}/img/champion/splash/${normalizeName(
				requestedChampion
			)}_${sRef["num"]}.jpg`
		);

		skins.push({
			chromas: sRef["chromas"],
			image: Buffer.from(championSplashSkinImage).toString("base64"),
			name: sRef["name"],
		});
	});

	champion["skins"] = skins;

	// Construindo spells
	const spellsRef: Record<string, string>[] = res["spells"];
	const spellObj: Record<string, Spell> = {
		q: {} as Spell,
		w: {} as Spell,
		e: {} as Spell,
		r: {} as Spell,
		p: {} as Spell,
	}

	spellsRef.forEach((spl) => {
		const {id:spellId, isException} = makeSpellId(spl)
		// const spellId = spl.id.slice(-1).toLocaleLowerCase();
		const imageFile = isException?`${spl.id}.png`:`${requestedChampion}${spellId.toLocaleUpperCase()}.png`;
		const spellImage = fs.readFileSync(
			`${basePath}/game/img/spell/${imageFile}`
		);

		const spell: Spell = {
			name: spl['name'],
			description: spl['description'],
			image: Buffer.from(spellImage).toString("base64"),
		}

		spellObj[spellId] = spell

	});

	const passiveRef: Record<string, string> = res["passive"];

	champion['spells'] = {
		q: spellObj['q'],
		w: spellObj['w'],
		e: spellObj['e'],
		r: spellObj['r'],
		p: {
			description: passiveRef['description'],
			name: passiveRef['name'],
		},
	}

	return NextResponse.json(champion);
}