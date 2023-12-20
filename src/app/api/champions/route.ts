import { basePath, dataSetVersion } from "@/constants";
import { ChampionsListDTO } from "@/dto/models";
import * as fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    
    const res = fs.readdirSync(`${basePath}/${dataSetVersion}/data/pt_BR/champion`, { withFileTypes: true });
    const champions: ChampionsListDTO = res.filter((file) => file.isFile()).map(file => file.name.split('.')[0])

    return NextResponse.json(champions)
}
