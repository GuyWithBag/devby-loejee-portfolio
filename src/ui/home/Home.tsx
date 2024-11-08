import SkillsShowcase from "@/components/skills-showcase/SkillsShowcase";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Carousel from "react-multi-carousel";

const Home = () => {
	return (
		<div className="flex flex-row w-full min-h-screen justify-evenly items-center">
			<section className=" flex-grow flex justify-center max-w-[50%] p-10">
				<div className="flex flex-col justify-evenly items-stretch max-w-96 gap-4">
					<Image
						alt="Profile Picture"
						height={600}
						width={600}
						src={"/images/profile_pic.jpg"}
						className=" object-cover "
					/>
					<p className="text-center">
						I am a flexible programmer learner capable of learning and adapating
						very fast, game development and web development. With tools such as
						Flutter, Godot Engine and Svelte
					</p>
					<div className="flex flex-wrap justify-evenly items-stretch ">
						<FaLinkedin />
						<FaGithub />
						<MdEmail />
					</div>
				</div>
			</section>
			<div className="border-r-2 h-[80vh] border-pipboyDarkGreen" />
			<section className="flex-grow flex justify-center max-w-[50%] p-10">
				<SkillsShowcase />
				{/* <div>asdasd</div> */}
				{/* asdasd */}
			</section>
		</div>
	);
};

export default Home;
