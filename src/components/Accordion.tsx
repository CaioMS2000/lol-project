"use client";
import { PropsWithChildren, HTMLProps, useEffect } from "react";

interface AccordionProps extends PropsWithChildren, HTMLProps<HTMLElement> {}

export default function Accordion({ ...rest }: AccordionProps) {
	function handleClick(e: Event) {
		const targetElement = e.target as Element;
		const head = getElement(".caio-accordion-head");
		const body = getElement(".caio-accordion-body");
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
		const head = getElement(".caio-accordion-head");

		head.addEventListener("click", handleClick);

		return () => {
			head.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<>
			<div className="caio-accordion w-fit cursor-pointer">
				<div className="caio-accordion-head flex gap-1">
					<p className="border-2 border-b-0 p-1">habilidade Q</p>
					<p className="">habilidade W</p>
					<p className="">habilidade E</p>
					<p className="">habilidade R</p>
				</div>
				<div className="caio-accordion-body border-2 p-1">
					<div className="div caio-accordion-content active">
						descrição da habilidade Q
					</div>
					<div className="div caio-accordion-content hidden">
						descrição da habilidade W
					</div>
					<div className="div caio-accordion-content hidden">
						descrição da habilidade E
					</div>
					<div className="div caio-accordion-content hidden">
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
