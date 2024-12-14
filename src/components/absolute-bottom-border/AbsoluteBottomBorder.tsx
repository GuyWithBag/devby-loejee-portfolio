import { VariantProps, cva } from "class-variance-authority";
import React from "react";

export const AbsoluteBottomBorderVariants = cva(
	["border-b-2 border-pipboyGreen "],
	{
		variants: {
			width: {
				full: "w-full",
				"90%": "w-[90%]",
			},
		},
		defaultVariants: {
			width: "full",
		},
	}
);

interface AbsoluteBottomBorderProps
	extends VariantProps<typeof AbsoluteBottomBorderVariants> {}

const AbsoluteBottomBorder: React.FC<AbsoluteBottomBorderProps> = ({
	width,
}) => {
	return (
		<div className="w-full absolute bottom-0 flex justify-center items-center">
			<div className={AbsoluteBottomBorderVariants({ width })} />
		</div>
	);
};

export default AbsoluteBottomBorder;
