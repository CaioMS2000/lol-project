import ChampionCard from '@/components/ChampionCard';
import { baseUrl } from '@/constants';
import { Champion } from '@/dto/models';
import { fetchData, normalizeName } from '@/utils';
import { PropsWithChildren } from 'react';

interface ChampionPageProps extends PropsWithChildren{
    params:{
        name: string
    }
}

export default async function ChampionPage({params:{name}}:ChampionPageProps){
    const url = baseUrl + `/api/champion/full/${normalizeName(name)}`;
	const data: Champion= await fetchData(url, {cache: 'no-cache'});

  return(
      <>
      <ChampionCard champion={data}/>
      </>
  )
}