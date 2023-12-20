import ChampionsList from "@/components/ChampionsList";
import { baseUrl } from "@/constants";
import { ChampionDTO, ChampionsListDTO } from "@/dto/models";
import { isNumeric } from "@/utils";
import Image from "next/image";

export default async function Home() {
	let url = baseUrl + `/api/champions`;
	let res = await fetch(url);
	let data: ChampionsListDTO = await res.json();

	return (
		<div className="m-0 p-0">
			<ChampionsList championsList={data} />
		</div>
	);
}
