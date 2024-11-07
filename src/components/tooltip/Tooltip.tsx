"use client";

import { motion } from "framer-motion";
import React from "react";

interface Tooltip {
	content: string;
}

const Tooltip: React.FC<Tooltip> = ({ content }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className=" text-xs z-10  py-1 px-2 -bottom-[100%] absolute bg-pipboyBackground border-2 border-pipboyGreen rounded-sm "
		>
			{content}
		</motion.div>
	);
};

export default Tooltip;
