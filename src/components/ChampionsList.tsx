"use client";
import { baseUrl } from "@/constants";
import { ChampionDTO, ChampionsListDTO } from "@/dto/models";
import { PropsWithChildren, useEffect, useState } from "react";
import Image from "next/image";

interface ChampionsListProps extends PropsWithChildren {
	championsList: ChampionsListDTO;
}

export default function ChampionsList({ championsList }: ChampionsListProps) {
	const url = baseUrl + `/api/champion/short/`;
    const imageSize = 100
	const [champions, setChampions] = useState([] as ChampionDTO[]);

	useEffect(() => {
		championsList.forEach(async (champ) => {
            const compUrl = url + champ
			const res = await fetch(compUrl);
			const champion: ChampionDTO = await res.json();

			setChampions((prevState) => [...prevState, champion]);
		});
	}, []);

	return (
		// <div className="flex flex-wrap gap-3">
		<div className="grid grid-cols-3 gap-3">
			{champions.map((champ, index) => (
                <div key={index} className='flex flex-col border-2 border-gray-500 items-center'>
                    <p>{champ.name}</p>
                {/* <img src={`data:image/png;base64,${champ.images.profile}`} alt="Champion" /> */}
                <Image width={imageSize} height={imageSize} src={`data:image/png;base64,${champ.images.profile}`} alt="Champion" />
				<p>{champ.title}</p>
                </div>
			))}
		</div>
	);
}
