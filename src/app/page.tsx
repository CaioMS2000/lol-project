import ChampionsList from "@/components/ChampionsList";
import { baseUrl } from "@/constants";
import { fetchData } from "@/utils";

export default async function Home() {
	const url = baseUrl + `/api/champions`;
	const data: string[] = await fetchData(url)

	return (
		<div className="m-0 p-2">
			<ChampionsList championsNames={data} />
		</div>
	);
}
