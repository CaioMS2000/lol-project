import * as fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const filePath = 'src/dragontail-13.24.1/13.24.1/data/pt_BR/champion/Aatrox.json';
  
  const data = fs.readFileSync(filePath, 'utf8');
  // console.log(data)

  return NextResponse.json(data)
}