"use client";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import React, { MouseEventHandler, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { pages } from "@/data/showcasePages";

interface ShowcaseProps {
	onImageHoverStart?: (image: string) => void;
	onImageHoverEnd?: (image: string) => void;
	onImageClick?: (image: string) => void;
}

const Showcase: React.FC<ShowcaseProps> = ({
	onImageClick,
	onImageHoverStart,
	onImageHoverEnd,
}) => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	const [carouselIndex, setCarouselIndex] = useState<number>(0);

	const getTranslate = (): number => {
		return 100 * carouselIndex;
	};

	return (
		<div className="flex flex-row max-md:flex-col w-full min-h-screen justify-evenly max-md:justify-center max-md:gap-6 items-center px-24 max-md:px-20">
			<section className="relative flex-grow max-md:flex-grow-0 flex justify-center items-center gap-6  max-w-[50%] max-md:max-w-full flex-col  px-10 py-10 max-md:py-0">
				<div className="h-full max-h-72 w-full max-w-[35rem] border-2 border-pipboyGreen overflow-hidden relative">
					<motion.div
						className={`transition-all h-full max-h-72 flex flex-row`}
						animate={{
							transform: `translateX(-${getTranslate()}%)`,
						}}
					>
						{pages[tabIndex].images.map((value) => {
							return (
								<div className="w-full flex-none flex justify-center items-center">
									<Image
										width={1000}
										height={1000}
										onClick={() =>
											onImageClick != undefined ? onImageClick(value) : ""
										}
										onMouseOver={() =>
											onImageHoverStart != undefined
												? onImageHoverStart(value)
												: ""
										}
										onMouseOut={() => {
											onImageHoverEnd != undefined
												? onImageHoverEnd(value)
												: "";
										}}
										src={value}
										alt="poop"
										className=" h-full object-contain w-auto "
									/>
								</div>
								// <Image
								// 	width={1000}
								// 	height={1000}
								// 	src={value}
								// 	alt="poop"
								// 	className=" h-full object-contain w-full max-w-[35rem]  "
								// />
								// <div className="bg-red-400 w-[600px] m-1" />
							);
						})}
						{/* <div className="bg-red-400 w-[800px] flex-grow m-1" />
						<div className="bg-red-400 w-[800px] flex-grow m-1" />
						<div className="bg-red-400 w-[800px] flex-grow m-1" /> */}
					</motion.div>
				</div>
				<div className="flex flex-row justify-between w-full max-w-96">
					<button
						onClick={() => {
							if (tabIndex - 1 < pages.length - 1) {
								setTabIndex(pages.length - 1);
								return;
							}
							setTabIndex(tabIndex - 1);
						}}
					>
						<FaCaretLeft />
					</button>
					<a
						href={pages[tabIndex].href}
						className=" font-medium hover:text-pipboyYellow cursor-pointer"
					>
						{pages[tabIndex].name}
					</a>
					<button
						onClick={() => {
							if (tabIndex + 1 > pages.length - 1) {
								setTabIndex(0);
								return;
							}
							setTabIndex(tabIndex + 1);
						}}
					>
						<FaCaretRight />
					</button>
				</div>
				{pages[tabIndex].images.length > 1 ? (
					<div className="flex flex-row gap-2 left-1/2  z-10">
						{pages[tabIndex].images.map((value, index) => {
							return (
								<button
									className={`h-3 w-3  shadow-md bg-pipboyGreen rounded-full hover:bg-pipboyYellow transition-all hover:-translate-y-1 ${
										carouselIndex == index ? "bg-pipboyDarkGreen" : ""
									}`}
									onClick={() => {
										setCarouselIndex(index);
									}}
								/>
							);
						})}
					</div>
				) : (
					<></>
				)}
			</section>
			<div className="border-r-2 h-[80vh] border-pipboyDarkGreen max-md:hidden" />
			<section className="flex-grow max-md:flex-grow-0 flex flex-col justify-center max-w-[50%] max-md:max-w-full gap-4 px-10 py-10 max-md:py-0 ">
				<div>{pages[tabIndex].content}</div>
				<div className="flex flex-wrap">{pages[tabIndex].actions}</div>
			</section>
		</div>
	);
};

export default Showcase;
