import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography, Grid, styled } from "@mui/material";
import ProductImage from "./ProductImage";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
	margin-top: 55px;
	background: "#f2f2f2";
`;
const Container = styled(Grid)(({ theme }) => ({
	background: "#FFFFFF",
	display: "flex",
	[theme.breakpoints.down("md")]: {
		margin: 0,
		padding: 30,
	},
}));
const RightContainer = styled(Grid)`
	margin-top: 50px;
	& > p {
		margin-top: 10px;
	}
`;

const DetailView = () => {
	const fassured =
		"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
	const { id } = useParams();
	const { product, loading } = useSelector((store) => store.getProductDetails);
	const dispatch = useDispatch();

	useEffect(() => {
		if (product && id !== product.id) {
			dispatch(getProductDetails(id));
		}
	}, [dispatch, product, loading, id]);

	return (
		<Component>
			{product && Object.keys(product).length && (
				<Container container>
					<Grid item lg={4} md={4} sm={8} xs={12}>
						<ProductImage product={product} />
					</Grid>
					<RightContainer item lg={8} md={8} sm={8} xs={12}>
						<Typography
							style={{
								marginTop: 5,
								color: "#212121",
								fontSize: 18,
								fontWeight: 400,
							}}
						>
							{product.title.longTitle}
						</Typography>
						<Typography>
							912 Ratings & 169 Reviews
							<span>
								<img
									src={fassured}
									alt="fassured"
									style={{ width: 75, marginLeft: 10 }}
								/>
							</span>
						</Typography>
						<Typography>
							<span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
							&nbsp;&nbsp;&nbsp;
							<span style={{ color: "#878787" }}>
								<strike>{product.price.mrp}</strike>
							</span>
							&nbsp;&nbsp;&nbsp;
							<span style={{ color: "#388E3C" }}>
								{product.price.discount} off
							</span>
						</Typography>
						<ProductDetail product={product} />
					</RightContainer>
				</Container>
			)}
		</Component>
	);
};

export default DetailView;
