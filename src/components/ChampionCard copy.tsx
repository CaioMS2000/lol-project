"use client";
import { Champion } from "@/dto/models";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ChampionCardProps extends PropsWithChildren {
	champion: Champion;
}

export default function ChampionCard({ champion }: ChampionCardProps) {
  const [imgWidth, setImgWidth] = useState(0)
  const [imgHeight, setImgHeight] = useState(0)
  const imageRef = useRef<HTMLImageElement>(null)

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

	}, [])
	
  useEffect(() => {
    console.log(imageRef.current?.width)
    console.log(imageRef.current?.height)
    setImgWidth(imageRef.current?.width || 0)
    setImgHeight(imageRef.current?.height || 0)

	}, [imageRef, imageRef.current])

	return (
		<>
			<div className="flex flex-col p-1">
				<a href="/" className="font-bold underline">
					Início
				</a>
				{/* <img className='w-full ' src={`data:image/png;base64,${champion.skins[0].image}`} alt={champion.name} /> */}
				{/* <div className={"w-[300px] min-h-[200px] bg-cover bg-center bg-no-repeat"} style={{backgroundImage: `url(data:image/png;base64,${champion.skins[0].image})`}}></div> */}
				<div className="relative max-w-[600px] bg-yellow-200">
					<img
						className="w-full absolute "
						src={`data:image/png;base64,${champion.skins[0].image}`}
						alt={champion.name}
            ref={imageRef}
					/>
					{/* <div className="absolute w-40 h-40 bg-red-200"></div> */}
					{/* <div className="absolute w-40 h-40 bg-black/20"></div> */}
					<div className={`absolute bg-black/40`} style={{width: `${imgWidth}px`, height: `${imgHeight}px`}}>
            <div className="relative">
              <div className={`bg-red-300 mt-[${imgHeight/2}px]`}>AAATROX</div>
            </div>
          </div>
				</div>
			</div>
		</>
	);
}
