import React from "react";

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
	return (
		<section className="flex min-h-screen overflow-hidden flex-col items-center justify-between ">
			{children}
		</section>
	);
};

export default Page;
