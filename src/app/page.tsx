import Page from "@/components/page/Page";
import Home from "@/ui/home/Home";
import Image from "next/image";

// reference image: https://gamerant.com/fallout-4-best-pip-boy-mods/

export default function page() {
	return (
		<div className="overflow-hidden">
			{/* <div className="bg-red-400 w-40 h-10" /> */}
			<Page>
				{/* <div className=" max-w-80 h-[100px] bg-blue-500">
					<p>
						asdasdasdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
					</p>
				</div> */}
				<Home />
			</Page>
			{/* <div className="bg-red-400 w-[100px] h-[100px] "></div> */}
			{/* <Home /> */}
		</div>
	);
}
