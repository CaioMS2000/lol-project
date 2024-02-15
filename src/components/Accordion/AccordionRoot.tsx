"use client";
import { PropsWithChildren, HTMLProps, useEffect } from 'react';

interface AccordionRootProps extends PropsWithChildren, HTMLProps<HTMLElement> {
}

export default function AccordionRoot({children, ...rest}:AccordionRootProps){

  function handleClick(e: Event) {
		const activeOptionClass = 'active-option';
		const activeContentClass = 'active-content';
		const classes = ["border-2", "border-b-0", "p-1"];
		const targetElement = e.target as Element;
		const accordionHead = getElement(".my-accordion-head");
		const accordionBody = getElement(".my-accordion-body");
		const accordionHeadChildren = Array.from(accordionHead.children);
		const accordionBodyChildren = Array.from(accordionBody.children);
		const activeOption = accordionHead.querySelector('.active-option')
		const activeContent = accordionBody.querySelector('.active-content')

    // console.log("targetElement")
    // console.log(targetElement)
    // console.log('\n')
    // console.log("accordionHead")
    // console.log(accordionHead)
    // console.log('\n')
    // console.log("accordionBody")
    // console.log(accordionBody)
    // console.log('\n')
    // console.log("accordionHeadChildren")
    // console.log(accordionHeadChildren)
    // console.log('\n')
    // console.log("accordionBodyChildren")
    // console.log(accordionBodyChildren)
    // console.log('\n')
    // console.log("activeOption")
    // console.log(activeOption)
    // console.log('\n')
    // console.log("activeContent")
    // console.log(activeContent)
    // console.log('\n')

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
		const head = getElement(".my-accordion-head");

		head.addEventListener("click", handleClick);

		return () => {
			head.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<>
			<div className="my-accordion w-fit cursor-pointer">
      {children}				
			</div>
		</>
	);
}

function getElement(query: string) {
	const element = document.querySelector(query);

	if (!element) throw Error(`${query} não encontrado`);

	return element;
}