"use client";
import { getElement } from "@/utils/client-only";
import {
	PropsWithChildren,
	HTMLProps,
	Children,
	Fragment,
	isValidElement,
	cloneElement,
	ReactElement,
	useEffect,
} from "react";

interface AccordionHeadProps extends PropsWithChildren, HTMLProps<HTMLElement> {
	activeClass?: string;
}

export default function AccordionHead({
	children,
	activeClass,
	...rest
}: AccordionHeadProps) {
	const targetedElement = ".my-accordion-head";

	function handleClick(e: Event) {
		const targetElement = (e.target as Element).closest(
			".my-accordion-head > *"
		);
		if (!targetElement) return;

		const activeOptionClass = "active-option";
		const activeContentClass = "active-content";
		const classes = activeClass ? activeClass.split(" ") : [];
		const accordionHead = getElement(targetedElement);
		const accordionBody = getElement(".my-accordion-body");
		const accordionHeadChildren = Array.from(accordionHead.children);
		const accordionBodyChildren = Array.from(accordionBody.children);
		const activeOption = accordionHead.querySelector(".active-option");
		const activeContent = accordionBody.querySelector(".active-content");

		if (!activeOption) return;
		if (!activeContent) return;

		// atualizando o 'head'
		classes.forEach((c) => activeOption.classList.remove(c));
		activeOption.classList.remove(activeOptionClass);

		let index = -1;
		accordionHeadChildren.forEach((opt, i) => {
			if (opt.ariaLabel === targetElement.ariaLabel) {
				classes.forEach((c) => opt.classList.add(c));
				opt.classList.add(activeOptionClass);
				index = i;
			}
		});

		// atualizando o 'body'
		activeContent.classList.add("hidden");
		activeContent.classList.remove(activeContentClass);

		accordionBodyChildren[index].classList.remove("hidden");
		accordionBodyChildren[index].classList.add(activeContentClass);
	}

	useEffect(() => {
		const head = getElement(targetedElement);

		head.addEventListener("click", handleClick);

		return () => {
			head.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<>
			<div className="my-accordion-head flex gap-2 justify-between">
				{Children.toArray(children).map((child, index) => {
					const elementIsValid = isValidElement(child);

					if (elementIsValid) {
						if (index == 0) {
							const newChild = cloneElement(
								child as ReactElement,
								{
									className: `${
										child.props.className || ""
									} ${activeClass || ""} active-option`,
								}
							);

							return <Fragment key={index}>{newChild}</Fragment>;
						}
					}

					return <Fragment key={index}>{child}</Fragment>;
				})}
			</div>
		</>
	);
}
