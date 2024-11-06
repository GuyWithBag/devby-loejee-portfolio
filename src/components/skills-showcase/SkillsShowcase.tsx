"use client";

import React, { useState } from "react";
import TabBar from "../tab-bar/TabBar";
import { MdFlutterDash } from "react-icons/md";
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
	];

	const technologies: Icon[] = [
		{ name: "Git", icon: <FaGitAlt className="w-full h-full" /> },
		{ name: "Firebase", icon: <IoLogoFirebase className="w-full h-full" /> },
		{ name: "AdMob", icon: <SiGoogleadmob className="w-full h-full" /> },
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
	// return <div className="">asdasdss</div>;
	return (
		<div className="flex flex-col max-w-[30rem] w-full ">
			<TabBar keys={keys} onChange={onTabBarChange} />
			<div className="flex flex-wrap gap-4">
				{getSkills(currentKey.value ?? currentKey.name).map((value, index) => {
					// console.log("\n");
					// console.log("PENISSSSSS\n\n");
					// console.log(currentKey);
					if (typeof value === "string") {
						return <div key={value} />;
					}
					return (
						<div
							key={value.name}
							className=" text-pipboyGreen w-10 h-10 flex items-stretch content-stretch "
						>
							{value.icon}
						</div>
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
