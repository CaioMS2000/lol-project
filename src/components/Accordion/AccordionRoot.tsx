"use client";
import { PropsWithChildren, HTMLProps } from "react";

interface AccordionRootProps
	extends PropsWithChildren,
		HTMLProps<HTMLElement> {}

export default function AccordionRoot({
	children,
	...rest
}: AccordionRootProps) {
	return (
		<>
			<div className="my-accordion w-fit cursor-pointer">{children}</div>
		</>
	);
}
