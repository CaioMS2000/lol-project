"use client";
import { PropsWithChildren, HTMLProps } from "react";

interface CollapseContentProps
	extends PropsWithChildren,
		HTMLProps<HTMLDivElement> {}

export default function CollapseContent({
	children,
	className,
	...rest
}: CollapseContentProps) {
	return (
		<>
			<div {...rest} className={"collapse-content" + ` ${className}`}>{children}</div>
		</>
	);
}
