"use client";
import { HTMLProps, PropsWithChildren } from "react";

interface CollapseRootProps
	extends PropsWithChildren,
		HTMLProps<HTMLDivElement> {
	closable?: boolean;
}

export default function CollapseRoot({
	children,
	className,
	closable = false,
	...rest
}: CollapseRootProps) {
	return (
		<>
			<div {...rest} tabIndex={0} className={"collapse " + className}>
				{closable && <input type="checkbox" />}
				{children}
			</div>
		</>
	);
}
