import React from "react";

interface GooglePlayButtonProps {
	href: string;
}

const GooglePlayButton: React.FC<GooglePlayButtonProps> = ({ href }) => {
	return (
		<a
			href={href}
			className="relative inline-block text-white bg-gray-900 border border-black px-4 py-3 pl-[40px] text-[18px] font-semibold rounded-md cursor-pointer focus:outline-none hover:bg-gray-700 active:bg-gray-700 active:shadow-inner font-[fontfutura]"
		>
			<span
				className="absolute left-[6px] top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] bg-cover bg-no-repeat"
				style={{
					backgroundImage:
						"url('https://4.bp.blogspot.com/-52U3eP2JDM4/WSkIT1vbUxI/AAAAAAAArQA/iF1BeARv2To-2FGQU7V6UbNPivuv_lccACLcB/s30/nexus2cee_ic_launcher_play_store_new-1.png')",
				}}
			></span>
			<span className="absolute left-[40px] top-[5px] text-xs font-normal">
				GET IT ON
			</span>
			Google Play
		</a>
	);
};

export default GooglePlayButton;
