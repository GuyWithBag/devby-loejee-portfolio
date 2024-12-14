import React from "react";

interface GithubButtonProps {
	href: string;
}
const GithubButton: React.FC<GithubButtonProps> = ({ href }) => {
	return (
		<a href={href} className="">
			View in Github
		</a>
	);
};

export default GithubButton;
