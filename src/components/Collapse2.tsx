"use client";
import { PropsWithChildren, HTMLProps, useEffect } from "react";

interface CollapseProps extends PropsWithChildren, HTMLProps<HTMLElement> {}

export default function Collapse({ ...rest }: CollapseProps) {
	function handleClick(e: Event) {
		const targetElement = e.target as Element;
		const head = getElement(".caio-collapse-head");
		const body = getElement(".caio-collapse-body");
		const filhos = head.children;
		const contents = Array.from(body.children);

		const past = head.querySelector(".border-2.border-b-0.p-1");
		past?.classList.remove("border-2");
		past?.classList.remove("border-b-0");
		past?.classList.remove("p-1");

		targetElement.classList.add("border-2");
		targetElement.classList.add("border-b-0");
		targetElement.classList.add("p-1");

		Array.from(filhos).forEach((filho, i) => {
			if (filho === e.target) {
				const el = contents[i];

				const atual = getElement(".active");
				console.log(atual);

				atual.classList.remove("active");
				atual.classList.add("hidden");

				el.classList.add("active");
				el.classList.remove("hidden");
			}
		});
	}

	useEffect(() => {
		console.clear();
		const head = getElement(".caio-collapse-head");

		head.addEventListener("click", handleClick);

		return () => {
			head.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<>
			<div className="caio-collapse w-fit cursor-pointer">
				<div className="caio-collapse-head flex gap-1">
					<p className="border-2 border-b-0 p-1">habilidade Q</p>
					<p className="">habilidade W</p>
					<p className="">habilidade E</p>
					<p className="">habilidade R</p>
				</div>
				<div className="caio-collapse-body border-2 p-1">
					<div className="div caio-collapse-content active">
						descrição da habilidade Q
					</div>
					<div className="div caio-collapse-content hidden">
						descrição da habilidade W
					</div>
					<div className="div caio-collapse-content hidden">
						descrição da habilidade E
					</div>
					<div className="div caio-collapse-content hidden">
						descrição da habilidade R
					</div>
				</div>
			</div>
		</>
	);
}

function getElement(query: string) {
	const element = document.querySelector(query);

	if (!element) throw Error(`${query} não encontrado`);

	return element;
}
