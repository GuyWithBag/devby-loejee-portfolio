"use client";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import React, { useState } from "react";
import GooglePlayButton from "@/components/google-play-button/GooglePlayButton";
import Image from "next/image";

const Showcase = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	const pages: ShowcasePage[] = [
		{
			name: "Chain Reaction: Atom Supreme Revamped",
			content: (
				<p>
					Chain Reaction Atom Revamped Supreme is your classic childhood
					strategy game re-imagined in a much more colorful/modern settings.
					This revamp shows much more explosive and expressive graphics and
					animations. <br />
					<br />
					Summary: <br />
					- Win the game by capturing all the enemy's atoms / colors by
					expanding your army of atoms in a strategic way by overloading your
					atoms. Which will start a chain reaction showing a colorful firework
					display until it destroys your enemies! <br />
				</p>
			),
			images: [
				"/images/portfolioImages/chainReactionGame/gameplay.png",
				"/images/portfolioImages/chainReactionGame/main_menu.png",
				"/images/portfolioImages/chainReactionGame/maps_2.png",
				"/images/portfolioImages/chainReactionGame/maps.png",
				"/images/portfolioImages/chainReactionGame/multiple_players_1.png",
				"/images/portfolioImages/chainReactionGame/multiple_players_2.png",
				"/images/portfolioImages/chainReactionGame/victory.png",
			],
			actions: (
				<>
					<GooglePlayButton href="https://play.google.com/store/apps/details?id=org.MacchiMatchaProductions.ChainReactionAtomRevampedSupreme" />
				</>
			),
		},
		{
			name: "NextJS E-Commerce",
			content: (
				<p>
					<span>Responsive E-Commerce Website With Functionalities</span>
					<p>
						Created a functional E-Commerce website that looks and functions
						similar to a real E-Commerce website.. <br />
						<br />
						Features: <br />
						- Add an item to cart (With their amount you want to add). <br />
						- You can add an item to your wishlist. <br />
						- You can view your shopping cart. <br />
						- State management is stored in the URL so you can share it with
						your friends!
						<br />- You can share the link to that product with your friends! -
						Animated banner
					</p>
				</p>
			),
			images: [
				"/images/portfolioImages/eCommerceApp/home_page_2.png",
				"/images/portfolioImages/eCommerceApp/home_page_dark_mode.png",
				"/images/portfolioImages/eCommerceApp/home_page.png",
				"/images/portfolioImages/eCommerceApp/product.png",
				"/images/portfolioImages/eCommerceApp/shopping_cart.png",
				"/images/portfolioImages/eCommerceApp/shopping_cart_2.png",
				"/images/portfolioImages/eCommerceApp/wish_list.png",
			],
			actions: <></>,
		},
		{
			name: "Music Player",
			content: (
				<p>
					<span>Music Player</span>
					<p>
						I was tired of finding things that are lacking in most music
						players. <br />
						<br />
						So i have decided to make my own! This is a work-in-progress project
						that aims to have a cloud containing all your music that you have
						downloaded shared across various platforms <br />
						Not only that, but it will have an option where you can play the
						music while overlapping with other audios.
					</p>
				</p>
			),
			images: [],
			actions: <></>,
		},
		{
			name: "Morse Code Torch",
			content: (
				<p>
					<span slot="title">Morse Code Torch</span>
					<p slot="body">
						A fun, useful app that you and your friends can use in order to
						communicate to each other at night in long distances using your
						flashlight. <br />
						<br />
						Features: <br />
						- Save your previous morse codes <br />
						- Change the duration of each unit <br />
						- Morse-code to text, text to Morse-code <br />
					</p>
				</p>
			),
			images: [],
			actions: <></>,
		},
		{
			name: "To Do App",
			content: (
				<p>
					<span slot="title">To Do App</span>
					<p slot="body">
						Created a to do app integrated with google's firebase database,
						formik, and zustand. <br />
						<br />
						Features: <br />
						- Create your own tasks. <br />
						- Delete tasks and see them on your recently deleted. <br />
						- Restore your deleted task. <br />- Tasks persists with google's
						online database, firebase.
					</p>
				</p>
			),
			images: [],
			actions: <></>,
		},
	];
	return (
		<div className="flex flex-row w-full min-h-screen justify-evenly items-center px-24">
			<section className=" flex-grow flex justify-center max-w-[50%] flex-col p-10">
				<Image
					width={1000}
					height={1000}
					src={pages[tabIndex].images[0]}
					alt="poop"
				/>
				{pages[tabIndex].name}
				<div className="flex flex-row justify-between">
					<button
						onClick={() => {
							setTabIndex(tabIndex - 1);
						}}
					>
						<FaCaretLeft />
					</button>
					<button
						onClick={() => {
							setTabIndex(tabIndex + 1);
						}}
					>
						<FaCaretRight />
					</button>
				</div>
			</section>
			<div className="border-r-2 h-[80vh] border-pipboyDarkGreen" />
			<section className="flex-grow flex flex-col justify-center max-w-[50%] gap-4 p-10">
				<div>{pages[tabIndex].content}</div>
				<div>{pages[tabIndex].actions}</div>
			</section>
		</div>
	);
};

export default Showcase;
