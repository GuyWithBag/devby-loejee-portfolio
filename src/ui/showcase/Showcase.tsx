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
		<div className="flex max-md:mt-11 flex-row max-md:flex-col w-full min-h-screen justify-evenly max-md:justify-center max-md:gap-6 items-center px-24 max-md:px-20 max-sm:px-1 ">
			<section className="relative flex-grow max-md:flex-grow-0 flex justify-center items-center gap-6  max-w-[50%] max-md:max-w-full flex-col  px-10 py-10 max-md:py-0 ">
				<div className="h-full max-h-72 w-full max-w-[35rem] border-2 border-pipboyGreen overflow-hidden relative">
					<motion.div
						className={`transition-all h-full max-h-72 flex flex-row`}
						animate={{
							transform: `translateX(-${getTranslate()}%)`,
						}}
					>
						{pages[tabIndex].images.map((value, index) => {
							return (
								<div
									key={index}
									className="w-full flex-none flex justify-center items-center"
								>
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
							if (tabIndex - 1 < 0) {
								setTabIndex(pages.length - 1);
								console.log(tabIndex);
								console.log("length: " + pages.length);
								return;
							}
							setTabIndex(tabIndex - 1);
							console.log(tabIndex);
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
								console.log(tabIndex);

								return;
							}
							setTabIndex(tabIndex + 1);
							console.log(tabIndex);
						}}
					>
						<FaCaretRight />
					</button>
				</div>
				{pages[tabIndex].images.length > 1 ? (
					<div className="flex justify-center gap-4 w-full items-center">
						<button
							onClick={() => {
								if (carouselIndex - 1 < 0) {
									setCarouselIndex(pages[tabIndex].images.length - 1);
									console.log(carouselIndex);
									console.log("length: " + pages[tabIndex].images.length);
									return;
								}
								setCarouselIndex(carouselIndex - 1);
								console.log(carouselIndex);
							}}
						>
							<FaCaretLeft />
						</button>

						<div className="flex flex-row gap-2 left-1/2  z-10">
							{pages[tabIndex].images.map((value, index) => {
								return (
									<button
										className={`h-3 w-3  shadow-md  rounded-full hover:bg-pipboyYellow transition-all hover:-translate-y-1 ${
											carouselIndex === index
												? "bg-pipboyDarkGreen"
												: "bg-pipboyGreen"
										}`}
										key={index}
										onClick={() => {
											setCarouselIndex(index);
										}}
									/>
								);
							})}
						</div>

						<button
							onClick={() => {
								if (carouselIndex + 1 > pages[tabIndex].images.length - 1) {
									setCarouselIndex(0);
									console.log(carouselIndex);

									return;
								}
								setCarouselIndex(carouselIndex + 1);
								console.log(carouselIndex);
							}}
						>
							<FaCaretRight />
						</button>
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
