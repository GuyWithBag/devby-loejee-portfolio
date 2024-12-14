"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

interface AnimatePageProviderProps
	extends React.HTMLAttributes<HTMLDivElement> {}

const AnimatePageProvider: React.FC<AnimatePageProviderProps> = ({
	children,
}) => {
	// const router = useRouter();
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={usePathname()}
				className={`${
					children === undefined || children === null ? "hidden" : ""
				}`}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{
					duration: 0.75,
				}}
				variants={{
					initialState: {
						opacity: 0,
					},
					animateState: {
						opacity: 1,
					},
					exitState: {},
				}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default AnimatePageProvider;
