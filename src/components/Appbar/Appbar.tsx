"use client";

import { Path } from "@/types/Path.type";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AbsoluteBottomBorder from "../absolute-bottom-border/AbsoluteBottomBorder";
import { motion } from "framer-motion";

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
			<AbsoluteBottomBorder width={"90%"} />
			<div className="flex flex-row pt-10  px-24 justify-around items-stretch ">
				<div className="flex-grow ">Meet Loejee!</div>
				<div className=" flex flex-row justify-evenly flex-1 ">
					{/* <Link className={`${path === "/" ? "" : "hidden"}`} href={"/"}>
					Home
				</Link> */}
					{paths.map((value, index) => {
						return (
							<div className="relative">
								{path === value.path ? (
									<motion.div
										initial={{ scaleY: 0.1 }}
										animate={{ scaleY: 1 }}
										className=" rounded-t-sm w-full h-full origin-bottom absolute border-pipboyGreen border-x-2 border-t-2 border-b-pipboyBackground border-b-2 z-[2] "
									/>
								) : (
									<div />
								)}
								<Link className={`p-2`} href={`${value.path}`} key={value.name}>
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
