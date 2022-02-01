import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className="Footer">
			<footer>
				<a href="/">Open-Source Code</a> Created by Summer Robinson ⓒ {year}
			</footer>
		</div>
	);
};

export default Footer;
