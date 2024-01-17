import { basePath } from "@/constants";
import * as fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const res = fs.readdirSync(`${basePath}/game/data/pt_BR/champion`, {
		withFileTypes: true,
	});
	const champions: string[] = res
		.filter((file) => file.isFile())
		.map((file) => file.name.split(".")[0]);

	return NextResponse.json(champions);
}
