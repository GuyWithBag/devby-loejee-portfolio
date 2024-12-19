import Page from "@/components/page/Page";
import SkillsShowcase from "@/components/skills-showcase/SkillsShowcase";
import React from "react";

const SkillsShowcasePage = () => {
	return (
		<div className="overflow-hidden">
			<Page>
				<div className="min-h-screen flex justify-center items-center p-10 max-sm:p-4">
					<SkillsShowcase />
				</div>
			</Page>
		</div>
	);
};

export default SkillsShowcasePage;
