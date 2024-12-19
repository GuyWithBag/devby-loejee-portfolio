import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ImageFullscreenViewProps {
	src: string;
	visible: boolean;
}
const ImageFullscreenView: React.FC<ImageFullscreenViewProps> = ({
	src,
	visible,
}) => {
	return (
		<motion.div
			className={`fixed top-0 left-0 w-screen h-screen pointer-events-none p-20 z-40 flex justify-center items-center ${
				src === "" ? "hidden" : ""
			} `}
			animate={{ opacity: visible ? 100 : 0 }}
		>
			<div className="p-2 border-pipboyGreen border-2  inline-flex bg-pipboyBackground ">
				{src !== "" ? (
					<Image
						src={src}
						alt="poop"
						width={1920}
						height={1080}
						objectFit="contain"
						className="object-contain w-auto h-full max-h-[90vh] max-w-screen"
					/>
				) : (
					<></>
				)}
			</div>
		</motion.div>
	);
};

export default ImageFullscreenView;
