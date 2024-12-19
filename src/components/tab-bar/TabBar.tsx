"use client";

import React, { useState } from "react";
import AbsoluteBottomBorder from "../absolute-bottom-border/AbsoluteBottomBorder";

interface TabBarProps {
	keys: TabBarKey[];
	onChange: (key: TabBarKey) => void;
	currentKey: TabBarKey;
}

const TabBar: React.FC<TabBarProps> = ({ keys, onChange, currentKey }) => {
	return (
		<div className="flex flex-wrap justify-between relative max-md:gap-x-4 ">
			<AbsoluteBottomBorder />
			{keys.map((value, index) => {
				return (
					<button
						key={value.value}
						className={`pb-1 ${
							value.name === currentKey.name ? "font-semibold" : ""
						}`}
						onClick={() => onChange(value)}
					>
						{value.name}
					</button>
				);
			})}
		</div>
	);
};

export default TabBar;
