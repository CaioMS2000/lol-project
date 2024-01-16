"use client";
import { Champion } from "@/dto/models";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import ChampionSkinsCarousel from "./ChampionSkinsCarousel";

interface ChampionCardProps extends PropsWithChildren {
	champion: Champion;
}

export default function ChampionCard({ champion }: ChampionCardProps) {
	return (
		<>
			<div className="flex flex-col p-2 gap-3 main">	
				<Banner champion={champion} />
				<p className="text-center font-bold text-3xl">Skins</p>
				<ChampionSkinsCarousel champion={champion}/>
			</div>
		</>
	);
}

function Banner({ champion }: { champion: Champion }) {
	return (
		<>
			<div className="card shadow-xl image-full !rounded-sm before:!rounded-sm before:!bg-black before:!opacity-50 w-fit mx-auto">
					<figure className="bg-zinc-900">
						<img
							className="min-w-[1500px]"
							src={`data:image/png;base64,${champion.skins[0].image}`}
							alt={champion.name}
						/>
					</figure>
					<div className="card-body">
						<div className="flex flex-col items-center h-[80%] justify-between">
							<div className="border-2 font-bold w-fit text-3xl py-5 px-10 border-white text-white">
								{champion.name}
							</div>
							<div className="font-bold text-white text-5xl h-fit underline underline-offset-2">
								{champion.title}
							</div>
						</div>
					</div>
				</div>
		</>
	);
}
