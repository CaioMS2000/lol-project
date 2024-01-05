import ChampionsList from "@/components/ChampionsList";
import { baseUrl } from "@/constants";
import { ChampionDTO, ChampionsListDTO } from "@/dto/models";

export default async function Home() {
	let url = baseUrl + `/api/champions`;
	let res = await fetch(url);
	let data: ChampionsListDTO = await res.json();

	return (
		<div className="m-0 p-2">
			<ChampionsList championsList={data} />
		</div>
	);
}
