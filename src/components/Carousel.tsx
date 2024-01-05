import { HTMLProps, PropsWithChildren } from "react";

interface CarouselProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
	images: string[];
	// [key:string]:any;
}

export default function Carousel({ images, className, ...rest }: CarouselProps) {
	const indexOfLast = images.length-1;

	return (
		<>
			<div {...rest} className={"carousel w-full " + className}>
				{images.map((i, index) => {
					const indexOfPrev = index == 0?indexOfLast:index-1;
					const indexOfNext = index == indexOfLast?0:index+1;

					return (
						<div
							key={index}
							id={`slide${index}`}
							className="carousel-item relative w-full"
						>
							<img src={i} alt="x" className="w-full" />
							<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
								<a href={`#slide${indexOfPrev}`} className="btn btn-circle">
									❮
								</a>
								<a href={`#slide${indexOfNext}`} className="btn btn-circle">
									❯
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
