"use client";

import { Path } from "@/types/Path.type";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AbsoluteBottomBorder from "../absolute-bottom-border/AbsoluteBottomBorder";

// About me
// Showcase
// Technology
// Contacts

const Appbar = () => {
	const router = useRouter();

	// console.log(path);
	const [path, setPath] = useState<string>("");
	const pathname = usePathname();
	useEffect(() => {
		setPath(pathname);
	});

	const paths: Path[] = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Showcase",
			path: "/showcase",
		},
	];

	return (
		<div className="w-full absolute z-[1] bg-pipboyBackground">
			<AbsoluteBottomBorder />
			<div className="flex flex-row pt-10  px-24 justify-around items-stretch ">
				<div className="flex-grow ">Meet Loejee!</div>
				<div className=" flex flex-row justify-evenly flex-1 ">
					{/* <Link className={`${path === "/" ? "" : "hidden"}`} href={"/"}>
					Home
				</Link> */}
					{paths.map((value, index) => {
						return (
							<Link
								className={`${
									path !== value.path
										? ""
										: "border-pipboyGreen border-x-2 border-t-2 border-b-pipboyBackground border-b-2 z-[2] "
								} p-2`}
								href={`${value.path}`}
								key={value.name}
							>
								{value.name}
							</Link>
						);
					})}
				</div>
				{/* <Link href={''}></Link> */}
			</div>
		</div>
	);
};

export default Appbar;
