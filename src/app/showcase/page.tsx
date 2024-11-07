import Page from "@/components/page/Page";
import Showcase from "@/ui/showcase/Showcase";
import React from "react";

const page = () => {
	return (
		<div className="overflow-hidden">
			<Page>
				<Showcase />
			</Page>
		</div>
	);
};

export default page;
