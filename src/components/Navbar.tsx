import { bungee } from "@/fonts/tailwind-like";
import { PropsWithChildren } from "react";

interface NavbarProps extends PropsWithChildren {}

export default async function Navbar({}: NavbarProps) {
	return (
		<>
			<div className="navbar bg-base-100 mb-5">
				<div className="flex-1 gap-5">
                    <a href="/"><img src="/img/lol-l-logo.png" alt="LOL logo" className="max-h-[100px]" /></a>
                    <a href="/">
						<p className={"text-5xl font-bold " + bungee}>SI LOL</p>
					</a>
				</div>
				<div className="flex-none">
					{/* <ul className="menu menu-horizontal px-1">
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
					</ul> */}
				</div>
			</div>
		</>
	);
}
