"use client";
import React, { useEffect } from "react";

interface FakePageProps {
	moveLeft: boolean;
}

// Tried to implement moving the page

const FakePage: React.FC<FakePageProps> = ({ moveLeft }) => {
	useEffect(() => {}, []);

	return (
		<div className="flex flex-row w-full min-h-screen min-w-screen justify-evenly items-stretch fixed z-10 pointer-events-none">
			<section
				id="leftSide"
				className=" flex-grow flex justify-center max-w-[50%] max-md:max-w-full p-10 invisible"
			></section>
			<div className="border-r-2 h-[80vh] border-pipboyDarkGreen max-md:hidden invisible" />
			<section
				id="rightSide"
				className="flex-grow flex justify-stretch items-stretch max-w-[50%] max-md:hidden "
			>
				<div className="bg-pipboyBackground w-full h-full" />
			</section>
		</div>
	);
};

export default FakePage;
