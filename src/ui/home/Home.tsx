import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Carousel from "react-multi-carousel";

const Home = () => {
	return (
		<div className="flex flex-wrap w-full min-h-screen justify-evenly items-center">
			<div className="">
				<section className="flex flex-col justify-evenly items-stretch max-w-96 gap-4">
					<Image
						alt="Profile Picture"
						height={600}
						width={600}
						src={"/images/profile_pic.jpg"}
						className=" object-cover self-center "
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
				</section>
			</div>
			<div className="border-r-2 h-[80vh] border-pipboyDarkGreen" />
			<section className="">Skills here!</section>
		</div>
	);
};

export default Home;
