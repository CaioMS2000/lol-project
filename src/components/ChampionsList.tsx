"use client";
import { baseUrl } from "@/constants";
import { LightChampion } from "@/dto/models";
import { PropsWithChildren, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchData, normalizeName } from "@/utils";
import { russo_one } from "@/fonts/tailwind-like";

interface ChampionsListProps extends PropsWithChildren {
	championsNames: string[];
}

export default function ChampionsList({ championsNames }: ChampionsListProps) {
	const url = baseUrl + `/api/champion/short/`;
	const imageSize = 100;
	const [champions, setChampions] = useState<LightChampion[]>([]);
	const { push } = useRouter();

	useEffect(() => {
		const fetchChampion = async (champName: string) => {
		  const compUrl = url + champName;
		  const champion: LightChampion = await fetchData(compUrl, { cache: "no-cache" });
	  
		  setChampions((prevState) => {
			const data = [...prevState];
	  
			if (!data.find((c) => c.name === champion.name)) {
			  data.push(champion);
			}
	  
			return data;
		  });
		};

		Promise.all(championsNames.map(fetchChampion));
	  }, [championsNames]);
	  

	return (
		<div className="grid grid-cols-5 gap-10">
			{
			champions
			.map((champ) => {

				return (
					(
						<div
							key={champ.name}
							className="flex flex-col border-8 border-gray-500 items-center align-middle cursor-pointer mx-auto w-[200px] p-3 rounded-lg font-bold gap-2"
							style={{ boxShadow: "#373737 0px 0px 25px 0px"}}
							onClick={() => {
								push(`/champion/${normalizeName(champ.name)}`);
							}}
						>
							<p className={" " + russo_one}>{champ.name}</p>
							{/* <img src={`data:image/png;base64,${champ.images.profile}`} alt="Champion" /> */}
							<Image
								width={imageSize}
								height={imageSize}
								src={`data:image/png;base64,${champ.images.profile}`}
								alt="Champion"
							/>
							<p className={"text-center " + russo_one}>{champ.title}</p>
						</div>
					)
				)
			})}
		</div>
	);
}
