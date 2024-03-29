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

interface AccordionBodyProps
	extends PropsWithChildren,
		HTMLProps<HTMLElement> {}

export default function AccordionBody({
	children,
	className,
	...rest
}: AccordionBodyProps) {
	return (
		<>
			<div className={"my-accordion-body" + ` ${className}`}>
				{Children.toArray(children).map((child, index) => {
					if (isValidElement(child)) {
						if (index == 0) {
							const newChild = cloneElement(
								child as ReactElement,
								{
									className: `${
										child.props.className || ""
									} active-content`,
								}
							);

							return <Fragment key={index}>{newChild}</Fragment>;
						} else {
							const newChild = cloneElement(
								child as ReactElement,
								{
									className: `${
										child.props.className || ""
									} hidden`,
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
