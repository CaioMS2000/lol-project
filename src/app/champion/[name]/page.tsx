import ChampionCard from '@/components/ChampionCard';
import { baseUrl } from '@/constants';
import { Champion } from '@/dto/models';
import { normalizeName } from '@/utils';
import { PropsWithChildren } from 'react';

interface ChampionPageProps extends PropsWithChildren{
    params:{
        name: string
    }
}

export default async function ChampionPage({params:{name}}:ChampionPageProps){
    let url = baseUrl + `/api/champion/full/${normalizeName(name)}`;
	let res = await fetch(url, {cache: 'no-cache'});
	let data: Champion= await res.json();
    console.log(data.name)
    // console.log(data.skins)
    console.log(data.skins.map(sk => sk.name))

  return(
      <>
      <ChampionCard champion={data}/>
      </>
  )
}