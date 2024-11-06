"use client";

import React, { useState } from "react";
import AbsoluteBottomBorder from "../absolute-bottom-border/AbsoluteBottomBorder";

interface TabBarProps {
	keys: TabBarKey[];
	onChange: (key: TabBarKey) => void;
}

const TabBar: React.FC<TabBarProps> = ({ keys, onChange }) => {
	return (
		<div className="flex flex-wrap justify-between">
			<AbsoluteBottomBorder />
			{keys.map((value, index) => {
				return (
					<button key={value.value} onClick={() => onChange(value)}>
						{value.name}
					</button>
				);
			})}
		</div>
	);
};

export default TabBar;
