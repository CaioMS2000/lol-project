"use client";
import { HTMLProps, PropsWithChildren } from "react";

interface CollapseTitleProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
}

export default function CollapseTitle({children, className, ...rest}: CollapseTitleProps) {
	return (
		<>
			<div {...rest} className={"collapse-title" + ` ${className}`}>
                {children}
			</div>
		</>
	);
}
