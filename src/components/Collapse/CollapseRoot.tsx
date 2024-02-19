"use client";
import {
	HTMLProps,
	PropsWithChildren,
	Fragment,
	ReactElement,
	isValidElement,
	ReactNode,
	Children,
	cloneElement,
	useState,
} from "react";

interface CollapseRootProps extends HTMLProps<HTMLDivElement> {
	closable?: boolean;
	children: ReactNode;
}

export default function CollapseRoot({
	children,
	className,
	closable = false,
	...rest
}: CollapseRootProps) {
	const [swapClass, setSwapClass] = useState("hidden");

	function handleClick() {
		if (swapClass == "hidden") setSwapClass("block");
		else setSwapClass("hidden");
	}

	return (
		<>
			<div {...rest} tabIndex={0} className={"collapse" + ` ${className}`}>
				{closable && <input onClick={handleClick} type="checkbox" />}

				{Children.toArray(children).map((child, index) => {
					if (
						isValidElement(child) &&
						typeof child?.type != "string"
					) {
						const componentName = child.type.name;

						if (componentName == "CollapseContent") {
							const newChild = cloneElement(
								child as ReactElement,
								{ className: `${swapClass}` }
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
