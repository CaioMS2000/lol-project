"use client";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { BsCaretLeftFill } from "react-icons/bs";
import { bungee } from "@/fonts/tailwind-like";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps extends PropsWithChildren {}

export default function Navbar({}: NavbarProps) {
	const navBarRef = useRef<HTMLDivElement>(null);
	const [showMiniNav, setShowMiniNav] = useState(false);
	const { push } = useRouter();
	const path = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (navBarRef == null || navBarRef.current == null) return;

			const scrollPosition = window.scrollY;
			const triggerPosition =
				navBarRef.current.offsetTop + navBarRef.current.offsetHeight;

			setShowMiniNav(scrollPosition > triggerPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className="navbar bg-base-100 mb-5 justify-center sm:justify-normal"
				ref={navBarRef}
			>
				<div className="flex-col sm:flex-row gap-5">
					<a href="/">
						<img
							src="/img/lol-l-logo.png"
							alt="LOL logo"
							className="max-h-[50px] sm:max-h-[100px]"
						/>
					</a>
					<a href="/">
						<p className={"font-bold " + bungee}>
							<span className="text-lg sm:text-5xl">SI LOL</span>
							<br />
							<span className="italic text-sm text-zinc-600">
								Sistema de informações sobre o League of Legends
							</span>
						</p>
					</a>
				</div>
				{/* <div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>Link</a>
						</li>
						<li>
							<details>
								<summary>Parent</summary>
								<ul className="p-2 bg-base-100 rounded-t-none">
									<li>
										<a>Link 1</a>
									</li>
									<li>
										<a>Link 2</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div> */}
			</div>
			{showMiniNav && !(path === "/") && (
				<div
					className="fixed top-2 left-2 z-50 font-bold text-lg bg-white px-3 py-1 text-black inline-flex items-center rounded-xl cursor-pointer"
					onClick={() => push("/")}
				>
					<BsCaretLeftFill className="text-blue-700" />
					INÍCIO
				</div>
			)}
		</>
	);
}
