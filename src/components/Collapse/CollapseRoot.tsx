"use client";
import {
	getAllElementFrom,
	getElement,
	getElementFrom,
} from "@/utils/client-only";
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
	useEffect,
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
	const titleComponentClass = ".collapse-title";
	const [swapClass, setSwapClass] = useState("hidden");

	function handleIcons() {
		const title: Element = getElement(titleComponentClass);
		const titleIcons = Array.from(getAllElementFrom(title, `.collapse-icon`));
		const activeIcon = {
			element: document.createElement("html") as Element,
			index: -1,
		};
		activeIcon.element = getElementFrom(
			title,
			".collapse-icon:not(.hidden)"
		);
		activeIcon.index = titleIcons.indexOf(activeIcon.element);
		activeIcon.element.classList.add('hidden');
		
		titleIcons[(activeIcon.index + 1) % titleIcons.length].classList.remove('hidden')
	}

	function handleClick() {
		if (swapClass == "hidden") setSwapClass("block");
		else setSwapClass("hidden");

		handleIcons();
	}

	return (
		<>
			<div
				{...rest}
				tabIndex={0}
				className={"collapse" + ` ${className}`}
			>
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
