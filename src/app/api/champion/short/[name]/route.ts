import { basePath } from "@/constants";
import { LightChampion } from "@/dto/models";
import { normalizeName, toCapitalCase } from "@/utils";
import * as fs from "fs";
import { NextResponse, NextRequest } from "next/server";

function createChampiontData(name: string, title: string, championProfileImage: Buffer, championSplashImage: Buffer): LightChampion{
	const images = {
		profile: Buffer.from(championProfileImage).toString("base64"),
		splash: Buffer.from(championSplashImage).toString("base64"),
	}

	return {
		name,
		title: toCapitalCase(title),
		images
	}
}

export async function GET(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameSplited = pathname.split("/");
	const requestedChampion = pathnameSplited[pathnameSplited.length - 1];

	const res = JSON.parse(
		fs.readFileSync(
			`${basePath}/game/data/pt_BR/champion/${requestedChampion}.json`,
			"utf8"
		)
	)["data"][requestedChampion];

	const championProfileImage = fs.readFileSync(
		`${basePath}/game/img/champion/${requestedChampion}.png`
	);
	const championSplashImage = fs.readFileSync(
		`${basePath}/img/champion/splash/${normalizeName(
			requestedChampion
		)}_0.jpg`
	);

	const champion = createChampiontData(res["name"], res["title"], championProfileImage, championSplashImage)

	return NextResponse.json(champion);
}
