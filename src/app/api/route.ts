import * as fs from 'fs';
import { NextResponse } from 'next/server';
import { dataSetPath } from '@/utils';

export async function GET(request: Request) {
  const filePath = dataSetPath(`champion/Aatrox.json`);
  
  const data = fs.readFileSync(filePath, 'utf8');
  // console.log(data)

  return NextResponse.json(JSON.parse(data))
}