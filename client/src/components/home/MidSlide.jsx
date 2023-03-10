import React from "react";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
	display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
	width: "83%",
	[theme.breakpoints.down("md")]: {
		width: "100%",
	},
}));

const AdvPoster = styled(Box)(({ theme }) => ({
	marginTop: 10,
	background: "#FFFFFF",
	width: "100%",
	marginLeft: 10,
	padding: 5,
	textAlign: "center",
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const MidSlide = ({ products }) => {
	const advURL =
		"https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
	return (
		<Component>
			<LeftComponent>
				<Slide products={products} title="Deals of the Day" timer={true} />
			</LeftComponent>
			<AdvPoster>
				<img src={advURL} style={{ width: 210, marginTop: 18 }} alt="adv" />
			</AdvPoster>
		</Component>
	);
};

export default MidSlide;
