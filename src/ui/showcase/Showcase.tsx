"use client";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import React from "react";

const Showcase = () => {
	// const [first, setfirst] = useState(second)

	const pages: ShowcasePage[] = [
		{ name: "Chain Reaction: Atom Supreme Revamped", content: <div></div> },
	];
	return (
		<div className="flex flex-row w-full min-h-screen justify-evenly items-center">
			<section className=" flex-grow flex justify-center max-w-[50%] flex-col">
				<div className="flex flex-row justify-between">
					<FaCaretLeft />
					<FaCaretRight />
				</div>
			</section>
			<div className="border-r-2 h-[80vh] border-pipboyDarkGreen" />
			<section className="flex-grow flex justify-center max-w-[50%]"></section>
		</div>
	);
};

export default Showcase;
