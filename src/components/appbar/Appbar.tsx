"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AbsoluteBottomBorder from "../absolute-bottom-border/AbsoluteBottomBorder";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { Path } from "@/types/path.type";

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
	}, [pathname]);

	const paths: Path[] = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Showcase",
			path: "/showcase",
		},
		{
			name: "Skills",
			path: "/skills-showcase",
		},
	];

	return (
		<div className="w-full absolute z-20 bg-pipboyBackground max-sm:text-sm">
			<AbsoluteBottomBorder width={"90%"} />
			<div className="flex flex-row max-md:flex-col max-sm:pt-4 pt-10  px-24 max-md:px-4 max-sm:gap-2 justify-around items-stretch ">
				<div className="flex-grow font-extralight text-xs ">Meet Loejee!</div>
				<div className=" flex flex-row justify-evenly flex-1 gap-4 ">
					{/* <Link className={`${path === "/" ? "" : "hidden"}`} href={"/"}>
					Home
				</Link> */}
					{paths.map((value, index) => {
						return (
							<div
								key={index}
								className={`relative max-sm:pb-2 ${
									value.name === "Skills" ? "hidden max-md:block" : ""
								}`}
							>
								{path === value.path ? (
									<motion.div
										initial={{ scaleY: 0.1 }}
										animate={{ scaleY: 1 }}
										className=" rounded-t-sm w-full h-full origin-bottom absolute border-pipboyGreen border-x-2 border-t-2 border-b-pipboyBackground border-b-2 z-[2] "
									/>
								) : (
									<div />
								)}
								<div
									className={`absolute -right-6 max-md:-right-4 bottom-1/2  ${
										path === value.path ? "" : "hidden"
									}`}
									style={{ transform: "scaleX(-1) translateY(50%)" }}
								>
									<FaPlay className="animate-rotateY max-md:w-3 max-md:h-3" />
								</div>

								<Link className={`p-2 `} href={`${value.path}`}>
									{value.name}
								</Link>
							</div>
						);
					})}
				</div>
				{/* <Link href={''}></Link> */}
			</div>
		</div>
	);
};

export default Appbar;
