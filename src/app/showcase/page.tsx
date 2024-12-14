"use client";

import ImageFullscreenView from "@/components/image-fullscreen-view/ImageFullscreenView";
import Page from "@/components/page/Page";
import Showcase from "@/ui/showcase/Showcase";
import React, { useState } from "react";

const page = () => {
	const [showFullscreenImage, setShowFullscreenImage] =
		useState<boolean>(false);
	const [fullscreenImage, setFullscreenImage] = useState("");

	const onImageHoverStart = (src: string) => {
		setShowFullscreenImage(true);
		setFullscreenImage(src);
	};
	const onImageHoverEnd = (src: string) => {
		setShowFullscreenImage(false);
	};

	return (
		<div className="overflow-hidden">
			<Page>
				<ImageFullscreenView
					src={fullscreenImage}
					visible={showFullscreenImage}
				/>
				<Showcase
					onImageHoverStart={onImageHoverStart}
					onImageHoverEnd={onImageHoverEnd}
				/>
			</Page>
		</div>
	);
};

export default page;
