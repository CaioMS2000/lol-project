import ChampionsList from "@/components/ChampionsList";
import { baseUrl } from "@/constants";

export default async function Home() {
	let url = baseUrl + `/api/champions`;
	let res = await fetch(url);
	let data: string[] = await res.json();

	return (
		<div className="m-0 p-2">
			<ChampionsList championsList={data} />
		</div>
	);
}
