import React from "react";

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
	return (
		<section className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between max-md:pt-10 ">
			{children}
		</section>
	);
};

export default Page;
