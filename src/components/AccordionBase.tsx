"use client";
import { PropsWithChildren, HTMLProps, useEffect } from "react";

interface AccordionProps extends PropsWithChildren, HTMLProps<HTMLElement> {}

export default function Accordion({ ...rest }: AccordionProps) {
	function handleClick(e: Event) {
		const activeOptionClass = 'active-option';
		const activeContentClass = 'active-content';
		const classes = ["border-2", "border-b-0", "p-1"];
		const targetElement = e.target as Element;
		const accordionHead = getElement(".caio-accordion-head");
		const accordionBody = getElement(".caio-accordion-body");
		const accordionHeadChildren = Array.from(accordionHead.children);
		const accordionBodyChildren = Array.from(accordionBody.children);
		const activeOption = accordionHead.querySelector('.active-option')
		const activeContent = accordionBody.querySelector('.active-content')

		if(!activeOption) return;
		if(!activeContent) return;

		// atualizando o 'head'
		classes.forEach(c => activeOption.classList.remove(c))
		activeOption.classList.remove(activeOptionClass)

		let index = -1;
		accordionHeadChildren.forEach((opt, i) => {
			if(opt === targetElement){
				classes.forEach(c => opt.classList.add(c))
				opt.classList.add(activeOptionClass)
				index = i
			}
		})

		// atualizando o 'body'
		activeContent.classList.add('hidden')
		activeContent.classList.remove(activeContentClass)

		accordionBodyChildren[index].classList.remove('hidden')
		accordionBodyChildren[index].classList.add(activeContentClass)
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
					<p className="border-2 border-b-0 p-1 active-option">habilidade Q</p>
					<p className="">habilidade W</p>
					<p className="">habilidade E</p>
					<p className="">habilidade R</p>
				</div>
				<div className="caio-accordion-body border-2 p-1">
					<div className="div caio-accordion-content active-content">
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