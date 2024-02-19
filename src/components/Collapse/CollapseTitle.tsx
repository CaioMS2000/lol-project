"use client";
import {
	HTMLProps,
	PropsWithChildren,
	useEffect,
	useRef,
	useState,
} from "react";

interface CollapseTitleProps
	extends PropsWithChildren,
		HTMLProps<HTMLDivElement> {}

export default function CollapseTitle({
	children,
	className,
	...rest
}: CollapseTitleProps) {
	const [done, setDone] = useState(false);
	const rootRef = useRef<HTMLDivElement | null>(null);
	const iconsClass = ".collapse-icon";

	function handleIcons() {
		if (!rootRef.current) return;

		const elements = Array.from(
			rootRef.current.querySelectorAll(iconsClass)
		);
		const elementsAmount = elements.length;

		if (elementsAmount == 1) elements[0].classList.add("hidden");
		else if (elementsAmount > 1) {
			const firstElement = elements.shift();
			elements.forEach((el, index) => {
				el.classList.add("hidden");
			});
		}
	}

	function boot() {
		handleIcons();

		setDone(true);
	}

	useEffect(() => {
		// handleIcons();
		boot();
	});

	return (
		<>
			{done && (
				<div
					{...rest}
					className={"collapse-title" + ` ${className}`}
					ref={rootRef}
				>
					{children}
				</div>
			)}
		</>
	);
}
