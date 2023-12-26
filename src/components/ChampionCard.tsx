"use client";
import { Champion } from "@/dto/models";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ChampionCardProps extends PropsWithChildren {
	champion: Champion;
}

export default function ChampionCard({ champion }: ChampionCardProps) {
	const [imgWidth, setImgWidth] = useState(0);
	const [imgHeight, setImgHeight] = useState(0);
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		// const newImage = document.createElement('img')
		// newImage.src = `data:image/png;base64,${champion.skins[0].image}`
		// newImage.onload = () => {
		//   console.log(newImage.width)
		//   console.log(newImage.height)
		// }
		// console.log(imageRef.current?.width)
		// console.log(imageRef.current?.height)
		// setImgWidth(imageRef.current?.width || 0)
		// setImgHeight(imageRef.current?.height || 0)
	}, []);

	useEffect(() => {
		console.log(imageRef.current?.width);
		console.log(imageRef.current?.height);
		setImgWidth(imageRef.current?.width || 0);
		setImgHeight(imageRef.current?.height || 0);
	}, [imageRef, imageRef.current]);

	return (
		<>
			<div className="flex flex-col p-1">
				<a href="/" className="font-bold underline">
					Início
				</a>

				<div className="card w-96 bg-base-100 shadow-xl image-full">
					<figure>
						<img
							src={`data:image/png;base64,${champion.skins[0].image}`}
							alt={champion.name}
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
