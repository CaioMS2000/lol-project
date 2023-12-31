"use client";
import { baseUrl } from "@/constants";
import { ChampionDTO, ChampionsListDTO } from "@/dto/models";
import { PropsWithChildren, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { normalizeName } from "@/utils";

interface ChampionsListProps extends PropsWithChildren {
	championsList: ChampionsListDTO;
}

export default function ChampionsList({ championsList }: ChampionsListProps) {
	const url = baseUrl + `/api/champion/short/`;
	const imageSize = 100;
	const [champions, setChampions] = useState([] as ChampionDTO[]);
	const { push } = useRouter();

	useEffect(() => {
		championsList.forEach(async (champ) => {
			const compUrl = url + champ;
			const res = await fetch(compUrl);
			const champion: ChampionDTO = await res.json();

			setChampions((prevState) => [...prevState, champion]);
		});
	}, []);

	return (
		<div className="grid grid-cols-5 gap-10">
			{(Array.from(new Set(champions))).map((champ, index) => (
				<div
					key={index}
					className="flex flex-col border-2 border-gray-500 items-center align-middle cursor-pointer mx-auto w-[200px] p-3 rounded-lg font-bold gap-2"
					style={{boxShadow: '#373737 0px 0px 19px 0px'}}
					onClick={() => {
						push(`/champion/${normalizeName(champ.name)}`);
					}}
				>
					<p className=''>{champ.name}</p>
					{/* <img src={`data:image/png;base64,${champ.images.profile}`} alt="Champion" /> */}
					<Image
						width={imageSize}
						height={imageSize}
						src={`data:image/png;base64,${champ.images.profile}`}
						alt="Champion"
					/>
					<p className='text-center'>{champ.title}</p>
				</div>
			))}
		</div>
	);
}
