"use client";
import { Champion } from "@/dto/models";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import { BsCaretRightFill } from "react-icons/bs";
import ChampionSkinsCarousel from "./ChampionSkinsCarousel";
import { orbitron } from "@/fonts/tailwind-like";
import { CollapseContent, CollapseRoot, CollapseTitle } from "./Collapse";
import Accordion from "./Accordion";

interface ChampionCardProps extends PropsWithChildren {
	champion: Champion;
}
export default function ChampionCard({ champion }: ChampionCardProps) {
	return (
		<>
			<div className={"flex flex-col p-2 gap-3 " + orbitron}>
				<Banner champion={champion} />

				<CollapseRoot id="passive" className="mb-5" closable>
					<CollapseTitle>
						<p className="p">
							<span className="italic text-zinc-600">
								Passiva:{" "}
							</span>
							{champion.spells.p.name}
						</p>
					</CollapseTitle>
					<CollapseContent>
						{champion.spells.p.description}
					</CollapseContent>
				</CollapseRoot>
				<Accordion></Accordion>
				{/* <div
					id="spells"
					className="flex flex-wrap gap-5 justify-center"
				>
					<CollapseRoot closable className="w-fit">
						<CollapseTitle>
							<div className="flex items-center gap-3">
								<div className="flex gap-1">
									<img
										className="max-h-10 rounded-lg"
										src={`data:image/png;base64,${champion.spells.q.image}`}
										alt={`${champion.name} Q`}
									/>
									<span className="italic text-sm font-bold">
										Q
									</span>
								</div>
								<p className="font-bold">
									{champion.spells.q.name}
								</p>
							</div>
						</CollapseTitle>
						<CollapseContent>
							<p className="font-bold">
								{champion.spells.q.description}
							</p>
						</CollapseContent>
					</CollapseRoot>

					<CollapseRoot closable className="w-fit">
						<CollapseTitle>
							<div className="flex items-center gap-3">
								<div className="flex gap-1">
									<img
										className="max-h-10 rounded-lg"
										src={`data:image/png;base64,${champion.spells.w.image}`}
										alt={`${champion.name} W`}
									/>
									<span className="italic text-sm font-bold">
										W
									</span>
								</div>
								<p className="font-bold">
									{champion.spells.w.name}
								</p>
							</div>
						</CollapseTitle>
						<CollapseContent>
							<p className="font-bold">
								{champion.spells.w.description}
							</p>
						</CollapseContent>
					</CollapseRoot>

					<CollapseRoot closable className="w-fit">
						<CollapseTitle>
							<div className="flex items-center gap-3">
								<div className="flex gap-1">
									<img
										className="max-h-10 rounded-lg"
										src={`data:image/png;base64,${champion.spells.e.image}`}
										alt={`${champion.name} E`}
									/>
									<span className="italic text-sm font-bold">
										E
									</span>
								</div>
								<p className="font-bold">
									{champion.spells.e.name}
								</p>
							</div>
						</CollapseTitle>
						<CollapseContent>
							<p className="font-bold">
								{champion.spells.e.description}
							</p>
						</CollapseContent>
					</CollapseRoot>

					<CollapseRoot closable className="w-fit">
						<CollapseTitle>
							<div className="flex items-center gap-3">
								<div className="flex gap-1">
									<img
										className="max-h-10 rounded-lg"
										src={`data:image/png;base64,${champion.spells.r.image}`}
										alt={`${champion.name} R`}
									/>
									<span className="italic text-sm font-bold">
										R
									</span>
								</div>
								<p className="font-bold">
									{champion.spells.r.name}
								</p>
							</div>
						</CollapseTitle>
						<CollapseContent>
							<p className="font-bold">
								{champion.spells.r.description}
							</p>
						</CollapseContent>
					</CollapseRoot>
				</div> */}

				<p className="sm:text-left p-5 font-bold text-3xl inline-flex items-center text-center">
					Skins
					<BsCaretRightFill className="text-blue-700 hidden sm:block" />
				</p>
				<ChampionSkinsCarousel champion={champion} />
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
						<div className="font-bold text-white text-center text-5xl h-fit underline underline-offset-2">
							{champion.title}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
