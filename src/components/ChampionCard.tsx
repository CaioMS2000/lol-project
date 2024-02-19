"use client";
import { Champion } from "@/dto/models";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import { BsCaretRightFill } from "react-icons/bs";
import ChampionSkinsCarousel from "./ChampionSkinsCarousel";
import { orbitron } from "@/fonts/tailwind-like";
import { CollapseContent, CollapseRoot, CollapseTitle } from "./Collapse";
import { AccordionBody, AccordionHead, AccordionRoot } from "./Accordion";
import { FaSortDown, FaSortUp } from "react-icons/fa6";
import { removeFakeHtmlTags } from "@/utils";

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
						<p className="inline-flex gap-2">
							<span className="italic text-zinc-600">
								Passiva:{" "}
							</span>
							{champion.spells.p.name}
							<FaSortDown className="collapse-icon" />
							<FaSortUp className="collapse-icon" />
						</p>
					</CollapseTitle>
					<CollapseContent>
						{champion.spells.p.description}
					</CollapseContent>
				</CollapseRoot>
				<AccordionRoot className="cursor-pointer bg-zinc-800 max-w-[1000px] shadow-[0_0_30px_2px] shadow-black rounded-lg">
					<AccordionHead activeClass="border-2 border-b-0 p-1 border-zinc-500">
						<div
							aria-label={"q"}
							className="flex items-center gap-3 p-2"
						>
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

						<div
							aria-label={"w"}
							className="flex items-center gap-3 p-2"
						>
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

						<div
							aria-label={"e"}
							className="flex items-center gap-3 p-2"
						>
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

						<div
							aria-label={"r"}
							className="flex items-center gap-3 p-2"
						>
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
					</AccordionHead>
					<AccordionBody className="rounded-[inherit] rounded-t-none border-2 p-3 border-zinc-500">
						<p className="font-bold flex flex-col gap-2">
							{removeFakeHtmlTags(champion.spells.q.description)
								.split("<br>")
								.map((txt, index) => (
									<span key={index}>{txt}</span>
								))}
						</p>
						<p className="font-bold flex flex-col gap-2">
							{removeFakeHtmlTags(champion.spells.w.description)
								.split("<br>")
								.map((txt, index) => (
									<span key={index}>{txt}</span>
								))}
						</p>
						<p className="font-bold flex flex-col gap-2">
							{removeFakeHtmlTags(champion.spells.e.description)
								.split("<br>")
								.map((txt, index) => (
									<span key={index}>{txt}</span>
								))}
						</p>
						<p className="font-bold flex flex-col gap-2">
							{removeFakeHtmlTags(champion.spells.r.description)
								.split("<br>")
								.map((txt, index) => (
									<span key={index}>{txt}</span>
								))}
						</p>
					</AccordionBody>
				</AccordionRoot>
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
