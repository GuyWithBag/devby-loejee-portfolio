"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import ImageFullscreenView from "@/components/image-fullscreen-view/ImageFullscreenView";

const Portrait = () => {
	const [showFullscreenImage, setShowFullscreenImage] =
		useState<boolean>(false);
	const [fullscreenImage, setFullscreenImage] = useState("");

	const onImageHoverStart = (src: string) => {
		setShowFullscreenImage(true);
		setFullscreenImage(src);
	};
	const onImageHoverEnd = (src: string) => {
		setShowFullscreenImage(false);
	};

	return (
		<>
			<ImageFullscreenView
				src={fullscreenImage}
				visible={showFullscreenImage}
			/>
			<div className="flex flex-col justify-evenly items-stretch max-w-96 gap-4">
				<Image
					alt="Profile Picture"
					height={600}
					width={600}
					src={"/images/profile_pic.jpg"}
					className=" object-cover border-2 border-pipboyGreen p-2 "
					onMouseOver={() => {
						setShowFullscreenImage(true);
						setFullscreenImage("/images/profile_pic.jpg");
					}}
					onMouseOut={() => {
						setShowFullscreenImage(false);
						setFullscreenImage("");
					}}
				/>
				<p className="text-center font-medium">
					I am a flexible programmer learner capable of learning and adapating
					very fast, game development and web development. With tools such as
					Flutter, Godot Engine and Svelte
				</p>
				<div className="flex flex-wrap justify-evenly items-stretch ">
					<FaLinkedin />
					<FaGithub />
					<MdEmail />
				</div>
			</div>
		</>
	);
};

export default Portrait;