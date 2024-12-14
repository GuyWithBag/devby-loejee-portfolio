import SkillsShowcase from "@/components/skills-showcase/SkillsShowcase";
import React from "react";
import Portrait from "@/ui/portrait/Portrait";
import FakePage from "@/components/fake-page/FakePage";
import { FaRegSmile } from "react-icons/fa";

const Home = () => {
	return (
		<div className="flex flex-row w-full min-h-screen justify-evenly items-center">
			<section className=" flex-grow flex justify-center max-w-[50%] max-md:max-w-full p-10">
				<Portrait />
			</section>
			<div className="border-r-2 h-[80vh] border-pipboyDarkGreen max-md:hidden" />
			<section className="flex-grow flex justify-center max-w-[50%] p-10 max-md:hidden">
				<SkillsShowcase />
				{/* <div>asdasd</div> */}
				{/* asdasd */}
			</section>
		</div>
	);
};

export default Home;
