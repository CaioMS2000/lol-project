"use client";
import {
	PropsWithChildren,
	HTMLProps,
	Children,
	Fragment,
	isValidElement,
	cloneElement,
	ReactElement,
} from "react";

interface AccordionHeadProps
	extends PropsWithChildren,
		HTMLProps<HTMLElement> {}

export default function AccordionHead({
	children,
	...rest
}: AccordionHeadProps) {
	return (
		<>
			<div className="my-accordion-head flex gap-1">
				{/* {children} */}
				{Children.toArray(children).map((child, index) => {
					console.log("head: avaliando..");
					console.log(child);
          const elementIsValid = isValidElement(child)
          console.log(`valid: ${elementIsValid}`)

					if (elementIsValid) {
						console.log("passou na verificação");
						if (index == 0) {
							const newChild = cloneElement(
								child as ReactElement,
								{
									className: `${
										child.props.className || ""
									} active-option`,
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
