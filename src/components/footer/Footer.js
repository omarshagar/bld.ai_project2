import React from "react";
import { Link } from "react-router-dom";
import FooterUpper from "./FooterUpper";
import FooterLower from "./FooterLower";
function Footer() {
	return (
		<div id="footer">
			<FooterUpper></FooterUpper>
			<FooterLower></FooterLower>
		</div>
	);
}

export default Footer;
