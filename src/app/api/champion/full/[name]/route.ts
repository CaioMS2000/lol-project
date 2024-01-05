import { basePath } from "@/constants";
import { Champion, Skin } from "@/dto/models";
import { normalizeName, toCapitalCase } from "@/utils";
import * as fs from "fs";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	const {pathname} = request.nextUrl
	const pathnameSplited = pathname.split('/')
	const requestedChampion = pathnameSplited[pathnameSplited.length - 1];

	const res = JSON.parse(
		fs.readFileSync(
			`${basePath}/game/data/pt_BR/champion/${requestedChampion}.json`,
			"utf8"
		)
	)["data"][requestedChampion];

	const champion = {} as Champion;
	const championProfileImage = fs.readFileSync(
		`${basePath}/game/img/champion/${requestedChampion}.png`
	);
	const championSplashImage = fs.readFileSync(
		`${basePath}/img/champion/splash/${normalizeName(requestedChampion)}_0.jpg`
	);

	champion["name"] = res["name"];
	champion["title"] = toCapitalCase(res["title"]);
	champion["images"] = {
		profile: Buffer.from(championProfileImage).toString("base64"),
		splash: Buffer.from(championSplashImage).toString("base64"),
	};

	const skinsRef: any[] = res['skins']
	const skins: Skin[] = []

	skinsRef.forEach(sRef => {
		const championSplashSkinImage = fs.readFileSync(
			`${basePath}/img/champion/splash/${normalizeName(requestedChampion)}_${sRef['num']}.jpg`
		);

		skins.push({
			chromas: sRef['chromas'],
			image: Buffer.from(championSplashSkinImage).toString("base64"),
			name: sRef['name']
		})
	})

	champion['skins'] = skins

	return NextResponse.json(champion);
}
