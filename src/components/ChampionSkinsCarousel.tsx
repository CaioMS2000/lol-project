"use client";
import { Champion } from "@/dto/models";
import { PropsWithChildren, useEffect, useState } from "react";
import Carousel from "./Carousel";
import { usePathname, useRouter } from "next/navigation";
import { normalizeName } from "@/utils";
import { BsCircleFill, BsDot, BsFillPersonFill, BsPersonSquare } from "react-icons/bs";

interface ChampionSkinsCarouselProps extends PropsWithChildren {
	champion: Champion;
}

export default function ChampionSkinsCarousel({
	champion,
}: ChampionSkinsCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const path = usePathname();
	const { push } = useRouter();

    const images = champion.skins.filter((sk) => sk.name != "default").map(
		(sk) => `data:image/png;base64,${sk.image}`
	);
	const indexOfLast = images.length - 1;

	function handleSlide() {
		setTimeout(() => {
			const currentUrl = window.location.href;
			const split1 = currentUrl.split(`${normalizeName(champion.name)}`);
			const flag = Boolean(split1[1].length);
			const newIndex = flag ? +split1[1].replace("#slide", "") : 0;

			if (newIndex != currentIndex) setCurrentIndex(newIndex);
		}, 1000 * 0.1);
	}

	useEffect(() => {
		handleSlide();
	});

	useEffect(() => {
		push(path);
	}, []);

	return (
		<>
			<div className="flex flex-col max-w-[1000px] mx-auto">
				<p className="font-bold inline-flex items-center justify-center gap-4 text-xl">
					<BsCircleFill className="text-blue-700 max-h-3"/>
					{
						champion.skins.filter((sk) => sk.name != "default")[
							currentIndex
						].name
					}
					<BsCircleFill className="text-blue-700 max-h-3"/>
				</p>
				<div className={"carousel w-full "}>
					{images
						.map((i, index) => {
							let indexOfPrev =
								index == 0 ? indexOfLast : index - 1;
							let indexOfNext =
								index == indexOfLast ? 0 : index + 1;
							return (
								<div
									id={`slide${index}`}
									key={index}
									className="carousel-item relative w-full min-w-[500px]"
								>
									<img src={i} alt="x" className="w-full" />
									<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
										<a
											href={`#slide${indexOfPrev}`}
											className="btn btn-circle"
											onClick={handleSlide}
										>
											❮
										</a>
										<a
											href={`#slide${indexOfNext}`}
											className="btn btn-circle"
											onClick={handleSlide}
										>
											❯
										</a>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}
