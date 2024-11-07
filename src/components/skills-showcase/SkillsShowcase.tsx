"use client";

import React, { useState } from "react";
import Image from "next/image";
import TabBar from "../tab-bar/TabBar";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import {
	SiDart,
	SiGodotengine,
	SiGoogleadmob,
	SiLua,
	SiTailwindcss,
	SiTypescript,
	SiFlutter,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiSvelteFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import Tooltip from "../tooltip/Tooltip";
import { motion } from "framer-motion";

const SkillsShowcase = () => {
	const keys: TabBarKey[] = [
		{
			name: "All",
		},
		{
			name: "Frameworks",
			value: "Frameworks",
		},
		{
			name: "Technologies",
		},
		{
			name: "Languages",
		},
	];

	const frameworks: Icon[] = [
		{ name: "Flutter", icon: <SiFlutter className="w-full h-full" /> },
		{ name: "React", icon: <FaReact className="w-full h-full" /> },
		{ name: "TailwindCSS", icon: <SiTailwindcss className="w-full h-full" /> },
		{ name: "NextJS", icon: <RiNextjsFill className="w-full h-full" /> },
		{ name: "Godot", icon: <SiGodotengine className="w-full h-full" /> },
		{ name: "Svelte", icon: <RiSvelteFill className="w-full h-full" /> },
	];

	const technologies: Icon[] = [
		{ name: "Git", icon: <FaGitAlt className="w-full h-full" /> },
		{ name: "Firebase", icon: <IoLogoFirebase className="w-full h-full" /> },
		{ name: "AdMob", icon: <SiGoogleadmob className="w-full h-full" /> },
		{ name: "HiveDB", icon: "/logos/hive-db.png" },
		{ name: "Zustand", icon: "/logos/react-zustand.png" },
	];

	const languages: Icon[] = [
		{ name: "Typescript", icon: <SiTypescript className="w-full h-full" /> },
		{
			name: "Javascript",
			icon: <IoLogoJavascript className="w-full h-full" />,
		},
		{ name: "Dart", icon: <SiDart className="w-full h-full" /> },
		{ name: "GDScript", icon: <SiGodotengine className="w-full h-full" /> },
		{ name: "Lua", icon: <SiLua className="w-full h-full" /> },
		{ name: "MySQL", icon: <GrMysql className="w-full h-full" /> },
		{ name: "Python", icon: <FaPython className="w-full h-full" /> },
		{ name: "Java", icon: <FaJava className="w-full h-full" /> },
		{ name: "C#", icon: <TbBrandCSharp className="w-full h-full" /> },
		{ name: "C++", icon: <TbBrandCpp className="w-full h-full" /> },
	];

	const getSkills = (category: string): Icon[] => {
		// console.log("\n");
		// console.log(category);
		// console.log("\n");
		if (category === "Frameworks") {
			return frameworks;
		} else if (category === "Technologies") {
			return technologies;
		} else if (category === "Languages") {
			return languages;
		} else if (category === "All") {
			const all: Icon[] = [...frameworks, ...technologies, ...languages];
			return all;
		}
		return [];
	};

	const [currentKey, setCurrentKey] = useState<TabBarKey>(keys[0]);
	// console.log(currentKey);
	// const skills: Icon[] =
	// console.log(skills);
	const onTabBarChange = (key: TabBarKey) => {
		setCurrentKey(key);
	};

	const [tooltipKey, setTooltipKey] = useState<string>("");

	// Global tooltip
	// tooltip Controller
	// [ setContent, setVisiblity ] = useTooltip()
	// tooltip

	// return <div className="">asdasdss</div>;
	return (
		<div className="flex flex-col max-w-96 h-52 w-full gap-2 ">
			<TabBar keys={keys} onChange={onTabBarChange} />
			<div className="flex flex-wrap gap-4">
				{getSkills(currentKey.value ?? currentKey.name).map((value) => {
					// console.log("\n");
					// console.log("PENISSSSSS\n\n");
					// console.log(currentKey);
					if (typeof value.icon === "string") {
						return (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="relative w-10 h-10 "
							>
								{tooltipKey === value.name ? (
									<Tooltip content={value.name} />
								) : (
									<div />
								)}
								<Image
									onMouseEnter={() => setTooltipKey(value.name)}
									onMouseLeave={() => setTooltipKey("")}
									src={value.icon}
									alt={value.name}
									height={200}
									width={200}
									className="object-contain oolor-pipboyGreen w-full h-full"
								/>
							</motion.div>
						);
					}
					return (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							key={value.name}
							className="w-10 h-10 relative"
						>
							{tooltipKey === value.name ? (
								<Tooltip content={value.name} />
							) : (
								<div />
							)}
							<div
								className="text-pipboyGreen flex items-stretch content-stretch  "
								onMouseEnter={() => setTooltipKey(value.name)}
								onMouseLeave={() => setTooltipKey("")}
							>
								{value.icon}
							</div>
						</motion.div>
					);
					// return <div>ASSSSSSSSSSSSSSS</div>;
				})}
				{/* {frameworks.map((value) => (
					<div>asdasdsa</div>
				))} */}
			</div>
		</div>
	);
};

export default SkillsShowcase;
